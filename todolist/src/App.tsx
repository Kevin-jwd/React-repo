import React from "react";
import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import TodoList from "./Todolist";
import Clock from "./Clock";
import MyWeather from "./MyWeather";

{
    /* 
  작성자 : do
  작성일 : 2025.04.07
  내용 : ...
*/
}

function App() {
    return (
        <div>
            <div className="container">
                <TodoList></TodoList>
                <Clock></Clock>
                <MyWeather weather="맑음">일기예보</MyWeather>
            </div>
        </div>
    );
}

export default App;
