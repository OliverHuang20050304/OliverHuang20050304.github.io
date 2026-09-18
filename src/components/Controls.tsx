import StyleSwitch from "./StyleSwitch";
import FontSizeControl from "./FontSizeControl";
import ThemeToggle from "./ThemeToggle";

// Fixed top-right cluster: style · text size · dark mode.
export default function Controls() {
  return (
    <div className="controls">
      <StyleSwitch />
      <FontSizeControl />
      <ThemeToggle />
    </div>
  );
}
