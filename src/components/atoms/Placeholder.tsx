// Default SortableJS
import Sortable from 'sortablejs';

// import useRef and useEffect
import { useEffect, useRef } from 'react';

const Placeholder = () => {
    const listRef = useRef<HTMLUListElement | null>(null);

    // need to rewrite using a shared list

    useEffect(() => {
        if (!listRef.current) return;

        new Sortable(listRef.current, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
    }, []); // empty array

    return (
    <ul className='list-group-container' ref={listRef}>
      {/* <button className='list-group-item'>test</button> */}
      <li className='list-group-item'>
        <span className=''>task</span>
      </li>
      <li className='list-group-item'>
        <span className=''>task</span>
      </li>
      <li className='list-group-item'>
        <span className=''>task</span>
      </li>
    </ul>
  );

};

export default Placeholder;
