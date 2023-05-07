// STYLES
import "../styles/AccentButton.css";

// TYPES
export type Props = {
	text: string;
	icon: JSX.Element;
};

function AccentBtn(props: Props) {
	return (
		<button className="accent-btn">
			<span className="accent-icon">{props.icon}</span>
			<p>{props.text}</p>
		</button>
	);
}

export default AccentBtn;
