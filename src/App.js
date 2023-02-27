
import './App.css';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import '../node_modules/react-bootstrap/esm/Container';
import Tasklists from './components/Tasklists';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <AddTask></AddTask>
    <Tasklists></Tasklists>
    </>
  );
}

export default App;
