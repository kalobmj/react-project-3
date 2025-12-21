// placeholder for each column
// columns default as this, hence why its in atom folder

// needs to be how our list will look but grey

// might do last when lists are fleshed out

// can possibly take items component and have each item just empty and grey color as placeholder

// drag methods:
// Key events used are:

//     dragstart: Fired when the user starts dragging an element. This is where you set the data to be transferred and the drag effect.
//     dragover: Fired repeatedly as the dragged element moves over a valid drop target. You must call event.preventDefault() here to allow a drop.
//     drop: Fired when the element is dropped on a valid target. This is where you handle the logic to move the element in the DOM.
//     dragend: Fired when the drag operation finishes (after a drop or a cancellation). 

// "draggable"=true

// dragging should work using sortable
// just have to break different columns up and drag between each

// example of shared list below:
// new Sortable(example2Left, {
//     group: 'shared', // set both lists to same group
//     animation: 150
// });

// new Sortable(example2Right, {
//     group: 'shared',
//     animation: 150
// });

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

    // need to rewrite using a shared list

    useEffect(() => {
        if (!listRef.current) return;

        new Sortable(listRef.current, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
    });

    return (
    <ul className='list-group-container' ref={listRef}>
      <li className='list-group-item'>Item One</li>
      <li className='list-group-item'>Item Two</li>
      <li className='list-group-item'>Item Three</li>
    </ul>
  );

};

export default Placeholder;
