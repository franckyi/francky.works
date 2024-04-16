import { Context, createContext } from "react";

const ThemeContext: Context<boolean> = createContext<boolean>(false);

export default ThemeContext;
