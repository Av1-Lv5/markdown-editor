// Dependencies
import React from "react";

// Components
import SideMenuToggler from "./SideMenuToggler";

// Styles
import "../styles/Header.css";

// SVG components
import { ReactComponent as BinIcon } from "../assets/icons/delete-bin-line.svg";
import { ReactComponent as SaveIcon } from "../assets/icons/save-2-line.svg";
import { ReactComponent as FileIcon } from "../assets/icons/file-line.svg";

// Types
import NoteObj from "../types/NoteObj";
export interface Props {
    currentNote: NoteObj;
    setCurrentNote: React.Dispatch<React.SetStateAction<NoteObj>>;
    notes: NoteObj[];
    setNotes: React.Dispatch<React.SetStateAction<NoteObj[]>>;
    currentNoteIndex: number;
}

function Header(props: Props) {
    const { currentNote, notes, setNotes, currentNoteIndex, setCurrentNote } =
        props;

    function saveChanges() {
        setNotes((prevNotes) => {
            const newNotes = prevNotes;

            newNotes[currentNoteIndex].content = (
                document.querySelector(".md-input") as HTMLInputElement
            ).value;
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
