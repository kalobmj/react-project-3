import Column from "../molecules/Column";
import { useState } from 'react';

interface Task {
  id: number;
  text: string;
}

interface ColumnType {
  id: number;
  title: string;
  items: Task[];
}

// notes for later

// this state needs to move to app.tsx
  // this is so that we can take the function and pass down to add task
  // and we can create the useState and pass that down to our maincontainer to render the columns and pass the task to the column

const MainContainer = () => {
  const [columns, setColumns] = useState<ColumnType[]>([
    { id: 1, title: 'To Do', items: [] },
    { id: 2, title: 'In Progress', items: [] },
    { id: 3, title: 'Done', items: [] },
  ]);

  const addTask = (text: string) => {
    setColumns(prev => prev.map(col =>
      col.id === 1
        ? { ...col, items: [...col.items, { id: Date.now(), text }] }
        : col
    ));
  };

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
