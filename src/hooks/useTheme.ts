import { useOutletContext } from "react-router-dom";

type ThemeContext = {
  theme: "dark" | "light";
};

const useTheme = () => {
  return useOutletContext<ThemeContext>();
};

export default useTheme;
