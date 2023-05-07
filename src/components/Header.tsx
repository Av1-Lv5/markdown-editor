// Dependencies
import { useContext } from "react";

// Context
import NotesContext from "../context/notesContext";

// Components
import SideMenuToggler from "./SideMenuToggler";
import SaveChanges from "./SaveChanges";
import DeleteBtn from "./DeleteBtn";
import NoteFile from "./NoteFile";

// Styles
import "../styles/Header.css";

function Header() {
	const { currentNote } = useContext(NotesContext);
	return (
		<header>
			<SideMenuToggler />
			<p className="logo">MARKDOWN</p>
			<div className="pipe-line"></div>
			<NoteFile index={NaN} note={currentNote} />
			<span className="actions">
				<DeleteBtn />
				<SaveChanges />
			</span>
		</header>
	);
}

export default Header;
