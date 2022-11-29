import React from "react";

import { ReactComponent as HamIcon } from "../assets/images/menu-fill.svg";
import { ReactComponent as CloseBtn } from "../assets/images/close-line.svg";

function sideMenuToggler() {
    const [isMenuShown, setIsMenuShown] = React.useState(false);

    function toggleSideMenu() {
        const sideMenu = document.querySelector("#side-menu");
        sideMenu.classList.toggle("hide");
        setIsMenuShown((prev) => !prev);
    }

    return (
        <span className="menu-icon" onClick={toggleSideMenu}>
            {isMenuShown ? <CloseBtn /> : <HamIcon />}
        </span>
    );
}

export default sideMenuToggler;
