// SVG components
import { ReactComponent as EyeIcon } from "../assets/icons/eye-line.svg";
import { ReactComponent as EyeOffIcon } from "../assets/icons/eye-off-line.svg";

// Styles
import "../styles/PaneHeader.css";

// Types
import { Dispatch } from "react";
export interface Props {
	title: "MARKDOWN" | "PREVIEW";
	isEyeIcon: boolean;
	setIsEyeIcon: Dispatch<React.SetStateAction<boolean>>;
}

function PaneHeader(props: Props) {
	return (
		<div className="pane-head">
			<p className="pane-title">{props.title}</p>
			<span
				className="eye-icon"
				onClick={() => {
					const mdContainer = document.querySelector(
						".md-preview-container"
					) as HTMLDivElement;
					if (props.isEyeIcon) {
						mdContainer.style.borderLeft = "none";
					} else {
						mdContainer.style.borderLeft =
							"1px solid var(--light-grey)";
					}
					props.setIsEyeIcon((prev) => !prev);
				}}
			>
				{props.isEyeIcon ? <EyeIcon /> : <EyeOffIcon />}
			</span>
		</div>
	);
}

export default PaneHeader;
