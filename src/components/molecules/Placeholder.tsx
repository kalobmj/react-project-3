// placeholder for each column
// columns default as this, hence why its in atom folder

// needs to be how our list will look but grey

// might do last when lists are fleshed out

// can possibly take items component and have each item just empty and grey color as placeholder

// Default SortableJS
import Sortable from 'sortablejs';

// import useRef and useEffect
import { useEffect, useRef } from 'react';

const Placeholder = () => {

    // placeholders take in items
    // items will pass place prop
    // determins if fake item or not

    const listRef = useRef<HTMLUListElement | null>(null);

    // new Sortable(example1, {
    //     animation: 150,
    //     ghostClass: 'blue-background-class'
    // });

    useEffect(() => {
        if (!listRef.current) return;

        new Sortable(listRef.current, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
    });

    return (
    <ul ref={listRef}>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  );

};

export default Placeholder;
