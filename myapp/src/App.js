import logo from './logo.svg';
import './App.css';
import './External.css'
import Home from './Components/Home'
import Calculator from './Components/Calculator'
import Variable from './Components/Variable'
import ArrowFunctions from './Components/ArrowFunctions';
import ArrayMethods from './Components/ArrayMethods';
import Test from './Components/Test';
import Destructuring from './Components/Destructuring'
import SpreadOperator from './Components/SpreadOperator';
import Ternary from './Components/Ternary';
import Props from './Components/Props';
import Events from './Components/Events';
import ConditionalRendering from './Components/ConditionalRendering';
import Imp from './Components/Imp';
import Router from './Components/Router';


function App() {
  const myStyle={
    color:"blue",
    backgroundColor: "black",

    heading:{
      color: "greenyellow",
      backgroundColor:"red",
    }
  }

  var a="Ram"
  const number = [10, 20, 30, 40]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is abc
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1 style={{color:"red", backgroundColor:"blue", marginTop:"100px"}}>Hello World</h1>
      <h2 style={myStyle}>Hello World</h2>
      <h3 style={myStyle.heading}>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6> */}
      {/* self closing */}
      {/* Function call */}
      {/* <Home/>
      <Calculator/>
      <Variable/>
      <ArrowFunctions/>
      <hr></hr>
      <ArrayMethods/>
      <Test/>
      <Destructuring/>
      <SpreadOperator/>
      <Ternary/>
      <Props value={a} age= {20} item={number}/>
      <Events/>
      <ConditionalRendering/>
      <Imp/> */}

      <Router/>
    </div>
  );
}

export default App;
