import { useRef, useEffect, useState } from "react";
import Item from "../atoms/item";
import Sortable from 'sortablejs';
import Placeholder from "../atoms/Placeholder";

interface ColumnProps {
  id: number;
  title: string;
  items: any[];
}

const Column = ({ title, items, id }: ColumnProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [numOfPlaceHolders] = useState(() => Math.floor(Math.random() * 2) + 2);

  useEffect(() => {
    if (!listRef.current) return;

    new Sortable(listRef.current, {
      group: 'shared',
      animation: 150,
      ghostClass: 'blue-background-class'
    });
  }, []);

  return (
    <div className="card list-group-container">
      <h2 className={`card-header column-title column-${id}`}>
        {title}
      </h2>
      <div
        className="card-body"
        ref={listRef}
      >
        {items.length === 0 ? (
          [...Array(numOfPlaceHolders)].map((_, index) => (
            <Placeholder key={index} />
          ))
        ) : (
          items.map(item => (
            <Item
              key={item.id}
              {...item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
