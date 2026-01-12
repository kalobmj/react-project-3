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

// adding task is working i think
  // just need to figure out how to get task text to display and not task 1, task 2, etc...

const MainContainer = ({ text, onTaskAdded }: { text: string; onTaskAdded: () => void }) => {
  const [columns, setColumns] = useState<ColumnType[]>([
    { id: 1, title: 'To Do', items: [] },
    { id: 2, title: 'In Progress', items: [] },
    { id: 3, title: 'Done', items: [] },
  ]);

  useEffect(() => {
    if (text.trim()) {
      setColumns(prev => prev.map(col =>
        col.id === 1
          ? { ...col, items: [...col.items, { id: Date.now(), text }] }
          : col
      ));
      onTaskAdded();
    }
  }, [text, onTaskAdded]);

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
