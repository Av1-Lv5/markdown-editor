import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContext = {
	theme: "dark" | "light";
	setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};
const ThemeContext = createContext<ThemeContext>({
	theme: "dark",
	setTheme: () => {},
});

export default ThemeContext;
