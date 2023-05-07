// Dependencies
import { useContext } from "react";

// Contexts
import NotesContext from "../context/notesContext";

// Styles
import "../styles/NoteFile.css";

// SVG Components
import { ReactComponent as FileIcon } from "../assets/icons/file-line.svg";

// Types
import NoteObj from "../types/NoteObj";
export type Props = {
	note: NoteObj;
	index: number;
};

function NoteFile(props: Props) {
	const { currentNoteIndex, setCurrentNote } = useContext(NotesContext);
	const { note, index } = props;

	return (
		<div
			className={`file ${
				currentNoteIndex === index ? "current-note" : null
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
}

export default NoteFile;
