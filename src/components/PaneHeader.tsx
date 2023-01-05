// SVG components
import { ReactComponent as EyeIcon } from "../assets/icons/eye-line.svg";
// import { ReactComponent as EyeOffIcon } from "../assets/icons/eye-off-line.svg";

// Types
export interface Props {
    title: string;
}

function PaneHeader(props: Props) {
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
