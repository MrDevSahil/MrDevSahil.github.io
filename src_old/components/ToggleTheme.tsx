import { useTheme } from "../context/ThemeContext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="toggle"
        aria-label="Toggle dark mode"
      />
    </label>
  );
}
