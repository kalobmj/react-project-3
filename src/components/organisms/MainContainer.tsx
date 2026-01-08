import Column from "../molecules/Column";
import { useState } from 'react';

const MainContainer = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', items: [] },
    { id: 2, title: 'In Progress', items: [] },
    { id: 3, title: 'Done', items: [] },
  ]);

  return (
    <div className="container">
      {columns.map(col => (
        <Column
          key={col.id}
          id={col.id}
          title={col.title}
          items={col.items}
        />
      ))}
    </div>
  );
};

export default MainContainer;
