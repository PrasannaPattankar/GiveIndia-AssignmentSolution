import logo from './logo.svg';
import './App.css';
import Dboard from "./Components/Dboard";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import React,{Component} from "react"; 
function App() {
  return (
    <Dboard/>  
  );
}

export default App;
