import { useRef } from "react";
import { useEffect } from 'react';
import Item from "../atoms/item";
import Sortable from 'sortablejs';

// interface (define incoming props)
interface ColumnProps {
    title: string;
    items: any[]; // array containing any data type?
}

const Column = ({ title, items }: ColumnProps) => {
    const listRef = useRef<HTMLDivElement>(null);

    // useEffect trigger on each column load
    // creates instance of sharable SortableJS list
    useEffect(() => {
        if (!listRef.current) return;

        new Sortable(listRef.current, {
            group: 'shared',
            animation: 150,
            ghostClass: 'blue-background-class'
        });
    }, []); // empty array

    return (
        <div className="card list-group-container">
            <h2 className="card-header column-title">   {title}
            </h2>
            <div className="card-body" ref={listRef}>
                <Item />
                <Item />
                <Item />
                {/* once column has actual tasks */}
                {/* use this map */}
                {items.map(item => <Item key={item.id} {...item} />)}
            </div>
        </div>
    )
};

export default Column;
