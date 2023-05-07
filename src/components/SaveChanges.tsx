// Dependencies
import { useContext } from "react";

// SVG
import { ReactComponent as SaveIcon } from "../assets/icons/save-2-line.svg";

// Styles
import "../styles/SaveChanges.css";

// Context
import NotesContext from "../context/notesContext";

// Components
import AccentBtn from "./AccentButton";

function SaveChanges() {
	const { setNotes, currentNoteIndex } = useContext(NotesContext);

	function updateNotes() {
		setNotes((prevNotes) => {
			const newNotes = [...prevNotes];

			const mdInputEl = document.querySelector(
				".md-input"
			) as HTMLInputElement;

			newNotes[currentNoteIndex].content = mdInputEl.value;

			return newNotes;
		});
	}

	return (
		<div id="saveChanges" onClick={updateNotes}>
			<AccentBtn text="Save Changes" icon={<SaveIcon />} />
		</div>
	);
}

export default SaveChanges;
