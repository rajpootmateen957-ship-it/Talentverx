import Button from "./Button.jsx";
import { Play } from "../icons/index.js";

function ExploreButton({
  variant = "secondary",
  size,
  block,
  href = "#features",
  iconSize = 16,
  ...rest
}) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      block={block}
      icon={Play}
      iconSize={iconSize}
      {...rest}
    >
      Explore Features
    </Button>
  );
}

export default ExploreButton;