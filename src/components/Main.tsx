import { SetStateAction, useContext, useEffect, useState } from "react";

// Components
import PaneHeader from "./PaneHeader";

// contexts
import NotesContext from "../context/notesContext";

// utils
import setTextareaHeight from "../utils/calculateRemainingHeight";

// Styles
import "../styles/Main.css";
import "../styles/Preview.css";

function Main() {
	// Contexts
	const { currentNote } = useContext(NotesContext);

	// States
	const [content, setContent] = useState(currentNote.content);
	const [isEyeIcon, setIsEyeIcon] = useState(true);

	// Functions
	function updatePreview(
		event: React.ChangeEvent<HTMLTextAreaElement>
	): void {
		setContent(event.target.value);
	}

	// Effects
	useEffect(() => {
		setContent(currentNote.content);
	}, [currentNote]);

	// code belongs to markdown-it package.
	let md = markdownit();
	let mdParsed = md.render(`${content}`);

	useEffect(() => {
		setTextareaHeight();
	}, []);

	return (
		<main>
			{isEyeIcon && (
				<div className="md-input-container">
					<PaneHeader
						title="MARKDOWN"
						isEyeIcon={isEyeIcon}
						setIsEyeIcon={setIsEyeIcon}
					/>
					<textarea
						className="md-input"
						name="md-input"
						autoFocus
						onChange={updatePreview}
						value={content}
					></textarea>
				</div>
			)}
			<div className="md-preview-container">
				<PaneHeader
					title="PREVIEW"
					isEyeIcon={isEyeIcon}
					setIsEyeIcon={setIsEyeIcon}
				/>
				<div className="md-preview">
					<div
						id="preview-content"
						dangerouslySetInnerHTML={{ __html: mdParsed }}
					></div>
				</div>
			</div>
		</main>
	);
}

export default Main;
