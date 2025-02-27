import { useThemeStore } from "../hooks/useThemeStore";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useThemeStore();
  console.log(theme);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className="fixed top-8 right-8 z-30 bg-white shadow-md rounded-lg p-3"
      onClick={handleClick}
    >
      {theme === "light" ? "🌝" : "🌚"}
    </button>
  );
};

export default ThemeSwitchButton;
