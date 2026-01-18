import { useRef, useEffect, useState } from "react";
import Item from "../atoms/item";
import Sortable from 'sortablejs';
import Placeholder from "../atoms/Placeholder";

interface ColumnProps {
    id: number;
    title: string;
    items: any[];
    onMove: (fromColumnId: number, toColumnId: number, oldIndex: number) => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}

const Column = ({ title, items, id, onMove, onDragStart, onDragEnd }: ColumnProps) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [numOfPlaceHolders] = useState(() => Math.floor(Math.random() * 2) + 2);

    const onMoveRef = useRef(onMove);
    const onDragStartRef = useRef(onDragStart);
    const onDragEndRef = useRef(onDragEnd);

    useEffect(() => {
        onMoveRef.current = onMove;
        onDragStartRef.current = onDragStart;
        onDragEndRef.current = onDragEnd;
    });

    useEffect(() => {
        if (!listRef.current) return;

        const sortable = new Sortable(listRef.current, {
            group: 'shared',
            animation: 150,
            ghostClass: 'blue-background-class',
            onStart: () => {
                onDragStartRef.current();
            },
            onEnd: (evt) => {
                const oldIndex = evt.oldIndex ?? 0;
                const droppedOnTrash = evt.to?.classList.contains('trash-zone');

                if (droppedOnTrash) {
                    onDragEndRef.current();
                    return;
                }

                try {
                    if (evt.item && evt.from) {
                        evt.from.insertBefore(evt.item, evt.from.children[oldIndex] || null);
                    }
                } catch (e) {
                    console.error('Error reverting DOM:', e);
                }

                const fromColumnId = Number(evt.from?.dataset?.columnId);
                const toColumnId = Number(evt.to?.dataset?.columnId);

                if (
                    !isNaN(fromColumnId) &&
                    !isNaN(toColumnId) &&
                    fromColumnId >= 1 && fromColumnId <= 3 &&
                    toColumnId >= 1 && toColumnId <= 3
                ) {
                    onMoveRef.current(fromColumnId, toColumnId, oldIndex);
                }

                onDragEndRef.current();
            }
        });

        return () => sortable.destroy();
    }, []);

    return (
        <div className="card list-group-container">
            <h2 className={`card-header column-title column-${id}`}>
                {title}
            </h2>
            <div className="card-body" ref={listRef} data-column-id={id}>
                {items.length === 0 ? (
                    [...Array(numOfPlaceHolders)].map((_, index) => (
                        <Placeholder key={index} />
                    ))
                ) : (
                    items.map(item => (
                        <Item key={item.id} {...item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Column;
