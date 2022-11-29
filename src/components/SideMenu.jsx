import React from "react";

// components
import Modal from "./Modal";

// Styles
import "../assets/styles/SideMenu.css";

// SVGs
import { ReactComponent as AddFile } from "../assets/images/file-add-line.svg";
import { ReactComponent as FileIcon } from "../assets/images/file-line.svg";

function SideMenu() {
    function toggleCreateNewModal() {
        const addNewModal = document.querySelector("#add-new-modal");
        addNewModal.classList.toggle("hide");
    }

    const notesElList = [
        <div className="file">
            <span className="file-icon">
                <FileIcon />
            </span>
            <span>
                <div className="file__date">dateCreated</div>
                <div className="file__title">noteTitle.md</div>
            </span>
        </div>,
    ];
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
            />
        </>
    );
}

export default SideMenu;
