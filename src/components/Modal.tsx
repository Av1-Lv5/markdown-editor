// Dependencies
import React, { useContext } from "react";
import { nanoid } from "nanoid";

// Utlity functions
import formatDate from "../utils/formatDate";
import toggleModal from "../utils/toggleModal";

// Styles
import "../styles/Modal.css";

// Types
import NotesContext from "../context/notesContext";

function Modal() {
	const { setNotes, setCurrentNote } = useContext(NotesContext);
	const [newNoteTitle, setNewNoteTitle] = React.useState("");

	function createNewNote(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault();
		if (newNoteTitle !== "") {
			const newNote = {
				id: nanoid(),
				title: `${newNoteTitle}`,
				dateCreated: formatDate(new Date()),
				content: `# ${newNoteTitle}`,
			};

			setCurrentNote(newNote);
			setNotes((prevNotes) => [newNote, ...prevNotes]);

			setNewNoteTitle("");
			toggleModal();
		}
	}

	function updateNewNoteTitle(e: React.ChangeEvent<HTMLInputElement>): void {
		const value = e.target.value;
		setNewNoteTitle(value);
	}

	return (
		<div id="modal-container" className="hide">
			<div className="overlay"></div>
			<div className="modal">
				<h4 className="modal__title">Create New document</h4>
				<form>
					<label htmlFor="doc-title">Document name:</label>
					<input
						type="text"
						value={newNoteTitle}
						onChange={updateNewNoteTitle}
						autoFocus
					/>
					<div className="actions">
						<button
							className="accent-btn"
							type="submit"
							onClick={createNewNote}
						>
							Create
						</button>
						<button type="reset" onClick={toggleModal}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
