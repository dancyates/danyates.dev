import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import useWebAnimations, { bounceInDown } from "@wellyshen/use-web-animations";

const App = () => {
    const { ref } = useWebAnimations<HTMLParagraphElement>({ ...bounceInDown });

    return (
        <div className="app">
            <header className="app-header">
                <p ref={ref}>
                    <b>danyates.dev</b> is coming soon
                </p>
            </header>
        </div>
    );
};

export default App;
