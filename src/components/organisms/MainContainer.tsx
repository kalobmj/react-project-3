import Column from "../molecules/Column";
import Trash from "../atoms/trash";
import { useEffect, useState } from 'react';

interface Task {
    id: number;
    text: string;
}

interface ColumnType {
    id: number;
    title: string;
    items: Task[];
}

const MainContainer = ({ text, onTaskAdded }: { text: string; onTaskAdded: () => void }) => {
    const [columns, setColumns] = useState<ColumnType[]>([
        { id: 1, title: 'To Do', items: [] },
        { id: 2, title: 'In Progress', items: [] },
        { id: 3, title: 'Done', items: [] },
    ]);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (fromColumnId: number, toColumnId: number, oldIndex: number) => {
        setColumns(prev => {
            const sourceColumn = prev.find(col => col.id === fromColumnId);
            const taskToMove = sourceColumn?.items[oldIndex];

            if (!taskToMove) return prev;

            return prev.map(col => {
                if (col.id === fromColumnId) {
                    return { ...col, items: col.items.filter((_, i) => i !== oldIndex) };
                }
                if (col.id === toColumnId) {
                    return { ...col, items: [taskToMove, ...col.items] };
                }
                return col;
            });
        });
    };

    const handleDelete = (fromColumnId: number, oldIndex: number) => {
        setColumns(prev => {
            const sourceColumn = prev.find(col => col.id === fromColumnId);

            if (!sourceColumn || oldIndex < 0 || oldIndex >= sourceColumn.items.length) {
                return prev;
            }

            return prev.map(col =>
                col.id === fromColumnId
                    ? { ...col, items: col.items.filter((_, i) => i !== oldIndex) }
                    : col
            );
        });
    };

    useEffect(() => {
        if (text.trim()) {
            setColumns(prev => prev.map(col =>
                col.id === 1
                    ? { ...col, items: [...col.items, { id: Date.now(), text }] }
                    : col
            ));
            onTaskAdded();
        }
    }, [text, onTaskAdded]);

    return (
        <>
            <Trash onDelete={handleDelete} isDragging={isDragging} />
            <div className="container">
                {columns.map(col => (
                    <Column
                        key={col.id}
                        id={col.id}
                        title={col.title}
                        items={col.items}
                        onMove={handleMove}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                    />
                ))}
            </div>
        </>
    );
};

export default MainContainer;
