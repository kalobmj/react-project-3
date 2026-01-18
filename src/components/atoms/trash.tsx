import { useRef, useEffect } from 'react';
import Sortable from 'sortablejs';
import trashIcon from '../../trash-icon.svg';

interface TrashProps {
    onDelete: (fromColumnId: number, oldIndex: number) => void;
    isDragging: boolean;
}

const Trash = ({ onDelete, isDragging }: TrashProps) => {
    const trashRef = useRef<HTMLDivElement>(null);
    const onDeleteRef = useRef(onDelete);

    useEffect(() => {
        onDeleteRef.current = onDelete;
    });

    useEffect(() => {
        if (!trashRef.current) return;

        const sortable = new Sortable(trashRef.current, {
            group: 'shared',
            onAdd: (evt) => {
                try {
                    const isTask = evt.item?.classList.contains('list-group-item');
                    const fromColumnId = Number(evt.from?.dataset?.columnId);
                    const oldIndex = evt.oldIndex;

                    if (evt.item && evt.from) {
                        evt.from.insertBefore(evt.item, evt.from.children[oldIndex ?? 0] || null);
                    }

                    if (
                        isTask &&
                        oldIndex !== undefined &&
                        !isNaN(fromColumnId) &&
                        fromColumnId >= 1 && fromColumnId <= 3
                    ) {
                        onDeleteRef.current(fromColumnId, oldIndex);
                    }
                } catch (error) {
                    console.error('Trash error:', error);
                }
            }
        });

        return () => sortable.destroy();
    }, []);

    return (
        <div
            ref={trashRef}
            className="trash-zone"
            style={{ opacity: isDragging ? 1 : 0, pointerEvents: isDragging ? 'auto' : 'none' }}
        >
            <img src={trashIcon} alt="trash" width={48} height={48} />
        </div>
    );
};

export default Trash;
