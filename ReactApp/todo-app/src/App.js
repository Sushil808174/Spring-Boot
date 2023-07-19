import './App.css';
import {Component} from 'react'
function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="FirstComponent"> This is my first component.</div>
  );
}

function SecondComponent() {
  return (
    <div className="SecondComponent"> This is my second component.</div>
  );
}

class ThirdComponent extends Component {
  render() {
    return (
      <div className="ThirdComponent"> This is my Third component.</div>
    );
  }
}

export default App;
