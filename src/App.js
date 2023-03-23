import './App.css';
import ClassComponent from './components/ClassComponent';
import ClassComponent2 from './components/ClassComponent2';
import ClassCounter from './components/ClassCounter';
import FuncComponent2 from './components/FuncComponent2';


function App() {
  return (
    //{ name: "green", children: "안녕하세요"} => props
    <div className="App">
      <FuncComponent2 name="green">안녕하세요</FuncComponent2>
      <ClassComponent2 name="abc">히히히</ClassComponent2>
    </div>
  );
}

export default App;