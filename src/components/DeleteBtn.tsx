// Dependencies
import { useContext } from "react";

// SVGs
import { ReactComponent as BinIcon } from "../assets/icons/delete-bin-line.svg";

// Context
import NotesContext from "../context/notesContext";

function DeleteBtn() {
	const { setNotes, currentNoteIndex, notes, setCurrentNote } =
		useContext(NotesContext);

	function deleteCurrentNote() {
		setNotes((prevNotes) => {
			const temp = [...prevNotes];

			temp.splice(currentNoteIndex, 1);
			return temp;
		});
		setCurrentNote(
			() => notes[currentNoteIndex === 0 ? 1 : currentNoteIndex - 1]
		);
	}
	return (
		<span
			className="bin-icon"
			onClick={() => {
				if (notes.length > 1) {
					deleteCurrentNote();
				} else return;
			}}
		>
			<BinIcon />
		</span>
	);
}

export default DeleteBtn;
