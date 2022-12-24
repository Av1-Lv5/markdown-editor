// dependencies
import React from "react";
import { nanoid } from "nanoid";

// styles
import "../assets/styles/Modal.css";

function Modal(props) {
    const { closeModal, setNotes, setCurrentNote, formatDate } = props;
    const [newNoteTitle, setNewNoteTitle] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newNote = {
            id: nanoid(),
            title: `${newNoteTitle}`,
            dateCreated: formatDate(new Date()),
            content: `# ${newNoteTitle}`,
        };

        setCurrentNote(newNote);
        setNotes((prevNotes) => [newNote, ...prevNotes]);

        setNewNoteTitle("");
        closeModal();
    }

    function updateNewNoteTitle(e) {
        const value = e.target.value;
        setNewNoteTitle(value);
    }

    return (
        <div id="add-new-modal" className="hide">
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
                        <button type="submit" onClick={handleSubmit}>
                            Create
                        </button>
                        <button type="reset" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
