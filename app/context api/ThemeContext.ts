import { Context, createContext } from "react";

const ThemeContext: Context<null | string> = createContext<null | string>(null);

export default ThemeContext;
