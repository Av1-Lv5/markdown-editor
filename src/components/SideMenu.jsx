// dependencies
import React from "react";

// Styles
import "../assets/styles/SideMenu.css";

// SVG components
import { ReactComponent as AddFile } from "../assets/images/file-add-line.svg";
import { ReactComponent as FileIcon } from "../assets/images/file-line.svg";

function SideMenu(props) {
    const { notes, openModal, currentNoteIndex, setCurrentNote } = props;

    const notesElList = notes.map((note, index) => {
        return (
            <div
                className={`file ${
                    currentNoteIndex === index ? "current-note" : ""
                }`}
                key={index}
                onClick={() => setCurrentNote(note)}
            >
                <span className="file-icon">
                    <FileIcon />
                </span>
                <span>
                    <div className="file__date">{note.dateCreated}</div>
                    <div className="file__title">{note.title}</div>
                </span>
            </div>
        );
    });

    return (
        <div id="side-menu" className="hide">
            <div className="menu__head">
                <p>MY DOCUMENTS</p>
            </div>
            <button onClick={openModal}>
                <span className="add-icon">
                    <AddFile />
                </span>{" "}
                New Document
            </button>
            <div className="files-list">{notesElList}</div>
        </div>
    );
}

export default SideMenu;
