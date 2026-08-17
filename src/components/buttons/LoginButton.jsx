import Button from "./Button.jsx";
import { LogIn } from "../icons/index.js";

function LoginButton({ variant = "ghost", size, block, to = "/login", iconSize = 16, ...rest }) {
  return (
    <Button
      to={to}
      variant={variant}
      size={size}
      block={block}
      icon={LogIn}
      iconSize={iconSize}
      {...rest}
    >
      Login
    </Button>
  );
}

export default LoginButton;