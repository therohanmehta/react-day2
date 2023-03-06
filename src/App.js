import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function Head1(){
  return(
    <h1>I am heading one ... from first component</h1>
  )
}
function Head2(){
  return(
    <h2>I am heading two ... from second component</h2>
  )
}
function Head3(){
  return(
    <h3>I am heading three ... from third component</h3>
  )
}
function Btn(){
  return(
    <button>Click Me !!</button>
  )
}


function App() {
  return (
    <Fragment>
      <Head1/>
      <Head2/>
      <Head3/>
      <Btn/>
    </Fragment>
  )
  }


export default App;
