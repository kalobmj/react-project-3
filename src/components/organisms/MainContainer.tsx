import Column from "../molecules/Column";
import { useEffect, useState } from 'react';

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

// need to fix the state
  // also need to fix how the columns are updating

const MainContainer = ({ text }: { text: string }) => {
  const [columns, setColumns] = useState<ColumnType[]>([
    { id: 1, title: 'To Do', items: [] },
    { id: 2, title: 'In Progress', items: [] },
    { id: 3, title: 'Done', items: [] },
  ]);

  useEffect(() => {

    setColumns(prev => prev.map(col =>
      col.id === 1
        ? { ...col, items: [...col.items, { id: Date.now(), text }] }
        : col
    ));

  }, [text]);

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
