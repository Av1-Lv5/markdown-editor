import React from "react";

// components
import Modal from "./Modal";

// Styles
import "../assets/styles/SideMenu.css";

// SVGs
import { ReactComponent as AddFile } from "../assets/images/file-add-line.svg";
import { ReactComponent as FileIcon } from "../assets/images/file-line.svg";

function SideMenu(props) {
    function toggleCreateNewModal() {
        // e.preventDefault();
        const addNewModal = document.querySelector("#add-new-modal");
        addNewModal.classList.toggle("hide");
    }

    function selectNote(index) {
        props.setCurrentNote(props.notes[index]);
    }

    const currentNoteIndex = props.notes.indexOf(props.currentNote);

    const notesElList = props.notes.map((note, index) => (
        <div
            className={`file ${
                currentNoteIndex === index ? "current-note" : ""
            }`}
            key={index}
            onClick={() => selectNote(index)}
        >
            <span className="file-icon">
                <FileIcon />
            </span>
            <span>
                <div className="file__date">{note.dateCreated}</div>
                <div className="file__title">{note.title}.md</div>
            </span>
        </div>
    ));

    return (
        <>
            <div id="side-menu" className="hide">
                <div className="menu__head">
                    <p>MY DOCUMENTS</p>
                </div>
                <button onClick={toggleCreateNewModal}>
                    <span className="add-icon">
                        <AddFile />
                    </span>{" "}
                    New Document
                </button>
                <div className="files-list">{notesElList}</div>
            </div>
            <Modal
                title="Create New document"
                closeModal={toggleCreateNewModal}
                setNotes={props.setNotes}
            />
        </>
    );
}

export default SideMenu;
