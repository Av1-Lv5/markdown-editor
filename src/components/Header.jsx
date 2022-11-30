import React from "react";
import SideMenuToggler from "./SideMenuToggler";

// Styles
import "../assets/styles/Header.css";

// SVG files

import { ReactComponent as BinIcon } from "../assets/images/delete-bin-line.svg";
import { ReactComponent as SaveIcon } from "../assets/images/save-2-line.svg";
import { ReactComponent as FileIcon } from "../assets/images/file-line.svg";

function Header(props) {
    const { currentNote, notes, setNotes, currentNoteIndex, setCurrentNote } =
        props;

    function saveChanges() {
        setNotes((prevNotes) => {
            const newNotes = prevNotes;

            newNotes[currentNoteIndex].content =
                document.querySelector("main .md-input").value;
            return newNotes;
        });
    }

    function deleteCurrentNote() {
        setNotes((prevNotes) => {
            const temp = prevNotes;

            const value = temp
                .slice(0, currentNoteIndex)
                .concat(temp.slice(currentNoteIndex + 1));
            return value;
        });
        setCurrentNote(
            notes[currentNoteIndex === 0 ? 1 : currentNoteIndex - 1]
        );
    }

    return (
        <header>
            <SideMenuToggler />

            <p className="logo">MARKDOWN</p>
            <div className="file">
                <span className="file-icon">
                    <FileIcon />
                </span>
                <span>
                    <div className="file__date">{currentNote.dateCreated}</div>
                    <div className="file__title">{currentNote.title}</div>
                </span>
            </div>
            <span className="actions">
                <span
                    className="bin-icon"
                    onClick={() => {
                        notes.length > 1 ? deleteCurrentNote() : "";
                    }}
                >
                    <BinIcon />
                </span>
                <button className="accent-color" onClick={saveChanges}>
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
