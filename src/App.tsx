import './App.css';
import Header from './components/atoms/Header';
import MainContainer from './components/organisms/MainContainer';
import AddTask from './components/atoms/AddTask';

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <AddTask/>
    </>
  );
}

export default App;
