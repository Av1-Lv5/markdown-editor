import React from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import PaneHeader from "./components/PaneHeader";

import "./App.css";

function App() {
    return (
        <>
            <SideMenu />
            <div id="body">
                <Header />
                <div className="pane-headers-container">
                    <PaneHeader title="MARKDOWN" />
                    <PaneHeader title="PREVIEW" />
                </div>
                <Main />
            </div>
        </>
    );
}

export default App;
