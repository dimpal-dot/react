import React from "react";
import logo from "./logo.svg";
import Greet from "./components/Greet";
import "./App.css";

function App() {
  let function_output = some();
   return <Greet userData={function_output}></Greet>;
 // return <Greet username={function_output}></Greet>;
}
function some() {
 let user=[];
 user['name']='Test';
  user['email']='test@yopmail.com';
  return user;
  //return "Test Username";
}

export default App;
