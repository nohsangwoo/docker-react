import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload hahadadf
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn
                    <div style={{ height: "auto", border: "1px solid black" }}>
                        {process.env.REACT_APP_TEST_VALUE}
                    </div>
                    <div style={{ height: "auto", border: "1px solid red" }}>
                        {process.env.REACT_APP_NAME}
                    </div>
                    <div style={{ height: "auto", border: "1px solid blue" }}>
                        {process.env.REACT_APP_TITLE}
                    </div>
                </a>
            </header>
        </div>
    );
}

export default App;
