import { useContext, useState } from "react";
import "../styles/ThemeSwitcher.css";
import ThemeContext from "../context/themeContext";

function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);
	function toggleTheme() {
		setTheme((prev) => {
			return prev === "dark" ? "light" : "dark";
		});
	}

	return (
		<div className="theme-switch-container">
			<p>DARK</p>
			<div
				id="theme-switcher"
				onClick={toggleTheme}
				data-theme={theme}
			></div>
			<p>LIGHT</p>
		</div>
	);
}

export default ThemeSwitcher;
