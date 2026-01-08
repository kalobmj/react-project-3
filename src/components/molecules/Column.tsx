// component for each of 3 columns
// columns will contain items
// columns will have different color tints depnding on left middle or right

// columns will pass up parameter 'section' which is left/middle/right

// cols will also pass down section parameter to items, to keep track of them, and help with status, all completed = green, some in progress = yellow etc.

import { useRef } from "react";
import { useEffect } from 'react';
import Item from "../atoms/item";

import Sortable from 'sortablejs';

// wed notes
// will render 3 columns
// if tasks are included in column, render them
// else render placeholder items (move placeholder from molecule to atom) (example below)
//     For the placeholder logic:
//   // Inside Column
//   {tasks.length === 0 ? (
//     <PlaceholderItems />
//   ) : (
//     tasks.map(task => <Item key={task.id} {...task} />)
//   )}

// placeholder are going to be an element rounded like picture, with span elements and using bootstrap placeholder

// will pick between 2 or 3 lines, and use random to vary size of lines

// include 1-2 placeholder elements for each column that does not include tasks

const Column = () => {

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
        <div className="list-group-container" ref={listRef}>
            <Item />
            <Item />
            <Item />
        </div>
    )

};

export default Column;
