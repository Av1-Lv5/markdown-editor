// dependencies
import React from "react";

// data
import { initialNote } from "./data/initialNote";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import Modal from "./components/Modal";
import PaneHeader from "./components/PaneHeader";

// styles
import "./styles/App.css";

// types
import NoteObj from "./types/NoteObj";

function App() {
    const notesLS: NoteObj[] = JSON.parse(
        localStorage.getItem("notes") || JSON.stringify([initialNote])
    );

    const [notes, setNotes] = React.useState(notesLS);

    const [currentNote, setCurrentNote] = React.useState(notes[0]);

    const [currentNoteIndex, setCurrentNoteIndex] = React.useState(0);

    // update LS whenever there is a change in 'notes' state
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    React.useEffect(() => {
        setCurrentNoteIndex(notes.indexOf(currentNote));
    }, [currentNote]);

    return (
        <>
            <SideMenu
                notes={notes}
                currentNoteIndex={currentNoteIndex}
                setCurrentNote={setCurrentNote}
            />
            <div id="body">
                <Header
                    currentNote={currentNote}
                    setCurrentNote={setCurrentNote}
                    currentNoteIndex={currentNoteIndex}
                    notes={notes}
                    setNotes={setNotes}
                />
                <div className="pane-headers-container">
                    <PaneHeader title="MARKDOWN" />
                    <PaneHeader title="PREVIEW" />
                </div>
                <Main currentNote={currentNote} />
            </div>
            <Modal
                title="Create New document"
                setNotes={setNotes}
                setCurrentNote={setCurrentNote}
            />
        </>
    );
}

export default App;
