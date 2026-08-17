import Button from "./Button.jsx";

function SubmitButton({ variant = "primary", size, block, icon, iconSize = 16, children, ...rest }) {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      block={block}
      icon={icon}
      iconSize={iconSize}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default SubmitButton;