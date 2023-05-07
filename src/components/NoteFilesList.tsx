// Dependencies
import { useContext } from "react";

// Contexts
import NotesContext from "../context/notesContext";

// Styles
import "../styles/NoteFilesList.css";

// Components
import NoteFile from "./NoteFile";

function NoteFilesList() {
	const { notes } = useContext(NotesContext);

	const notesElList = notes.map((note, index) => (
		<NoteFile note={note} index={index} />
	));

	return <div className="files-list">{notesElList}</div>;
}

export default NoteFilesList;
