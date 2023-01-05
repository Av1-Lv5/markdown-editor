// Dependencies
import React from "react";

// Utility functions
import toggleModal from "../utils/toggleModal";

// Styles
import "../styles/SideMenu.css";

// SVG components
import { ReactComponent as AddFile } from "../assets/icons/file-add-line.svg";
import { ReactComponent as FileIcon } from "../assets/icons/file-line.svg";

// Types
import NoteObj from "../types/NoteObj";
export interface Props {
    notes: NoteObj[];
    currentNoteIndex: number;
    setCurrentNote: React.Dispatch<React.SetStateAction<NoteObj>>;
}

function SideMenu(props: Props) {
    const { notes, currentNoteIndex, setCurrentNote } = props;

    const notesElList = notes.map((note, index) => (
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
    ));

    return (
        <div id="side-menu" className="hide">
            <div className="menu__head">
                <p>MY DOCUMENTS</p>
            </div>
            <button onClick={toggleModal}>
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
