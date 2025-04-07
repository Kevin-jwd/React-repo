import React from "react";
import logo from "./logo.svg";
import "./App.css";

{
    /* 
  작성자 : do
  작성일 : 2025.04.07
  내용 : ...
*/
}

function App() {
    let name = "리액트";

    return (
        <div
            style={{
                backgroundColor: "grey",
                color: "white",
                fontSize: "50px",
            }}
        >
            <h1>Hello, {name === "리액트" ? <h1>YES</h1> : null}!</h1>
            <p>반갑습니다.</p>
        </div>
    );
}

export default App;
