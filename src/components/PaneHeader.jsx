// SVG components
import { ReactComponent as EyeIcon } from "../assets/images/eye-line.svg";
// import { ReactComponent as EyeOffIcon } from "../assets/images/eye-off-line.svg";

function PaneHeader(props) {
    return (
        <div className="pane-head">
            <p className="pane-title">{props.title}</p>
            <span className="eye-icon">
                <EyeIcon />
            </span>
        </div>
    );
}

export default PaneHeader;
