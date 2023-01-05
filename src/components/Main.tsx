// Dependencies
import React from "react";

// Styles
import "../styles/Main.css";
import "../styles/Preview.css";

// Types
import NoteObj from "../types/NoteObj";
export interface Props {
    currentNote: NoteObj;
}

function Main(props: Props) {
    const { currentNote } = props;

    const [content, setContent] = React.useState(currentNote.content);

    React.useEffect(() => {
        setContent(currentNote.content);
    }, [currentNote]);

    // code belongs to markdown-it package.
    let md = window.markdownit();
    let mdParsed = md.render(`${content}`);

    function updatePreview(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void {
        setContent(event.target.value);
    }

    React.useEffect(() => {
        setTextareaHeight();
    }, []);

    // calculates remaining height of the `vh` after getting the height of header and pane header.
    function setTextareaHeight() {
        const headerHeight = (document.querySelector("header") as HTMLElement)
            ?.offsetHeight;
        const paneHeadHeight = (
            document.querySelector(".pane-head") as HTMLElement
        )?.offsetHeight;

        const mdInput = document.querySelector(".md-input") as HTMLInputElement;
        const mdPreview = document.querySelector(
            ".md-preview"
        ) as HTMLDivElement;

        const height = `calc(100vh - ${headerHeight + paneHeadHeight}px)`;

        mdInput.style.height = height;
        mdPreview.style.height = height;
    }

    return (
        <main>
            <textarea
                className="md-input"
                name="md-input"
                autoFocus
                onChange={updatePreview}
                value={content}
            ></textarea>
            <div
                className="md-preview"
                dangerouslySetInnerHTML={{ __html: mdParsed }}
            ></div>
        </main>
    );
}

export default Main;
