import './App.css';
import Header from './components/atoms/Header';
import MainContainer from './components/organisms/MainContainer';
import AddTask from './components/atoms/AddTask';
import { useState } from 'react';

function App() {
  const [taskText, setTaskText] = useState('');

  return (
    <>
      <Header />
      <MainContainer text={taskText} onTaskAdded={() => setTaskText('')} />
      <AddTask text={taskText} setText={setTaskText} />
    </>
  );
}

export default App;
