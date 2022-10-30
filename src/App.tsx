import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="top-gradient-bar" />
            <div className="app-header">
                <h1 className="heading-name">Hi, I'm Dan 👋</h1>
                <div className="subheading-text-container">
                    <p className="subheading-text">
                        I'm a full-stack <b>software engineer</b>, working at{" "}
                        <a href="https://gearset.com" target="_blank">
                            Gearset
                        </a>{" "}
                        in <b>Cambridge</b>. I specifically love buiding
                        frontends and clean UI, and also love{" "}
                        <a href="#">making games</a> too.
                    </p>
                </div>
                <div className="cta-container">
                    <div className="cta">
                        <a
                            className="landing-cta"
                            href="https://danyates.dev"
                            target="_blank"
                        >
                            View my CV
                        </a>
                    </div>
                    <div className="cta">
                        <a
                            className="landing-cta"
                            href="https://danyates.dev"
                            target="_blank"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
