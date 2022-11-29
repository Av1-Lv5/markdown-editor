import React from "react";
import SideMenuToggler from "./SideMenuToggler";

// Styles
import "../assets/styles/Header.css";

// SVG files

import { ReactComponent as BinIcon } from "../assets/images/delete-bin-line.svg";
import { ReactComponent as SaveIcon } from "../assets/images/save-2-line.svg";
import { ReactComponent as FileIcon } from "../assets/images/file-line.svg";

function Header(props) {
    return (
        <header>
            <SideMenuToggler />

            <p className="logo">MARKDOWN</p>
            <div className="file">
                <span className="file-icon">
                    <FileIcon />
                </span>
                <span>
                    <div className="file__date">dateCreated</div>
                    <div className="file__title">noteTitle.md</div>
                </span>
            </div>
            <span className="actions">
                <span className="bin-icon">
                    <BinIcon />
                </span>
                <button className="accent-color">
                    <span className="save-icon">
                        <SaveIcon />
                    </span>
                    <p>Save Changes</p>
                </button>
            </span>
        </header>
    );
}

export default Header;
