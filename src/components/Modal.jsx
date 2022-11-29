import React from "react";
import { nanoid } from "nanoid";
import "../assets/styles/Modal.css";

function Modal(props) {
    return (
        <div id="add-new-modal" className="hide">
            <div className="overlay"></div>
            <div className="modal">
                <h4 className="modal__title">Create New document</h4>
                <form>
                    <label htmlFor="doc-title">Document name:</label>
                    <input type="text" />
                    <div className="actions">
                        <button type="submit">Create</button>
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
