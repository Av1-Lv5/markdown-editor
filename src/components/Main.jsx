import React from "react";

// components

// styles
import "../assets/styles/Main.css";
import "../assets/styles/Preview.css";

function Main(props) {
    const { currentNote } = props;

    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        setContent(currentNote.content);
    }, [currentNote]);

    // code belongs to markdown-it package.
    let md = window.markdownit();
    let mdParsed = md.render(`${content}`);

    function updatePreview(event) {
        setContent(event.target.value);
    }

    React.useEffect(() => {
        setTextareaHeight();
    }, []);

    function setTextareaHeight() {
        const headerHeight = document.querySelector("header").offsetHeight;
        const paneHeadHeight =
            document.querySelector(".pane-head").offsetHeight;

        const mdInput = document.querySelector(".md-input");
        const mdPreview = document.querySelector(".md-preview");

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
