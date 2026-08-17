import Button from "./Button.jsx";
import { ArrowRight } from "../icons/index.js";

function DemoButton({ variant = "primary", size, block, href = "#demo", iconSize = 16, ...rest }) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      block={block}
      icon={ArrowRight}
      iconSize={iconSize}
      {...rest}
    >
      Request a Demo
    </Button>
  );
}

export default DemoButton;