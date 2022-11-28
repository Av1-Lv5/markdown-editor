import React from "react";
import "../assets/styles/Modal.css";

function Modal(props) {
    function updateNotes(e) {
        e.preventDefault();
        props.closeModal();

        const input = document.querySelector("input");
        if (input.value) {
            props.setNotes((prevNotes) => {
                return [
                    ...prevNotes,
                    {
                        id: prevNotes.length - 1,
                        title: input.value,
                        content: "",
                        dateCreated: "today",
                    },
                ];
            });
            input.value = "";
        }
    }

    return (
        <div id="add-new-modal" className="hide">
            <div className="overlay"></div>
            <div className="modal">
                <h4 className="modal__title">Create New document</h4>
                <form>
                    <label htmlFor="doc-title">Document name:</label>
                    <input type="text" />
                    <div className="actions">
                        <button type="submit" onClick={updateNotes}>
                            Create
                        </button>
                        <button type="reset" onClick={props.closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
