// Utility functions
import toggleModal from "../utils/toggleModal";

// Styles
import "../styles/SideMenu.css";

// SVG components
import { ReactComponent as AddFile } from "../assets/icons/file-add-line.svg";

// Components
import AccentBtn from "./AccentButton";
import NoteFilesList from "./NoteFilesList";

function SideMenu() {
	return (
		<div id="side-menu" className="hide">
			<div className="menu__head">
				<p>MY DOCUMENTS</p>
			</div>
			<div onClick={toggleModal} id="create-new">
				<AccentBtn text="New Document" icon={<AddFile />} />
			</div>
			<NoteFilesList />
		</div>
	);
}

export default SideMenu;
