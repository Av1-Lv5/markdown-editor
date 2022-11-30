import React from "react";
import { nanoid } from "nanoid";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import Modal from "./components/Modal";
import PaneHeader from "./components/PaneHeader";

import "./App.css";

function App() {
    const ls = JSON.parse(localStorage.getItem("notes"));

    const [notes, setNotes] = React.useState(
        ls
            ? ls
            : [
                  {
                      id: nanoid(),
                      title: "welcome",
                      dateCreated: `${formatDate(new Date())}`,
                      content:
                          "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```html\n<main>\n  <h1>This is a larger code block This is a larger code block</h1>\n</main>\n```",
                  },
              ]
    );

    const [currentNote, setCurrentNote] = React.useState(notes[0]);

    const [currentNoteIndex, setCurrentNoteIndex] = React.useState();

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    React.useEffect(() => {
        setCurrentNoteIndex(notes.indexOf(currentNote));
    }, [currentNote]);

    function toggleCreateNewModal() {
        const addNewModal = document.querySelector("#add-new-modal");
        addNewModal.classList.toggle("hide");
    }

    function formatDate(dateObj) {
        if (dateObj)
            return `${dateObj.getDate()}/${
                dateObj.getMonth() + 1
            } ${dateObj.getFullYear()}`;
    }

    return (
        <>
            <SideMenu
                notes={notes}
                openModal={toggleCreateNewModal}
                currentNoteIndex={currentNoteIndex}
                setCurrentNote={setCurrentNote}
            />
            <div id="body">
                <Header
                    currentNote={currentNote}
                    setCurrentNote={setCurrentNote}
                    currentNoteIndex={currentNoteIndex}
                    notes={notes}
                    setNotes={setNotes}
                />
                <div className="pane-headers-container">
                    <PaneHeader title="MARKDOWN" />
                    <PaneHeader title="PREVIEW" />
                </div>
                <Main currentNote={currentNote} />
            </div>
            <Modal
                title="Create New document"
                closeModal={toggleCreateNewModal}
                setNotes={setNotes}
                setCurrentNote={setCurrentNote}
                formatDate={formatDate}
            />
        </>
    );
}

export default App;
