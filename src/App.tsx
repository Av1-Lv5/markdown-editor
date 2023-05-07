// dependencies
import { useEffect, useState } from "react";

// data
import { initialNote } from "./data/initialNote";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import Modal from "./components/Modal";

// styles
import "./styles/App.css";

// types
import NoteObj from "./types/NoteObj";

// Context
import NotesContext from "./context/notesContext";

function App() {
	const notesLS: NoteObj[] = JSON.parse(
		localStorage.getItem("notes") || JSON.stringify([initialNote])
	);

	const [notes, setNotes] = useState(notesLS);
	const [currentNote, setCurrentNote] = useState(notes[0]);
	const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	useEffect(() => {
		setCurrentNoteIndex(notes.indexOf(currentNote));
	}, [currentNote]);

	return (
		<NotesContext.Provider
			value={{
				notes,
				setNotes,
				currentNote,
				setCurrentNote,
				currentNoteIndex,
			}}
		>
			<SideMenu />
			<div id="body">
				<Header />
				<Main />
			</div>
			<Modal />
		</NotesContext.Provider>
	);
}

export default App;
