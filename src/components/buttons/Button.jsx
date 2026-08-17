import { Link } from "react-router-dom";

function Button({
  to,
  href,
  type,
  variant = "primary",
  size,
  block,
  icon: Icon,
  iconSize = 16,
  children,
  className = "",
  ...rest
}) {
  const cls = [
    "tv-btn",
    `tv-btn--${variant}`,
    size ? `tv-btn--${size}` : "",
    block ? "tv-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && <Icon size={iconSize} aria-hidden="true" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={cls} {...rest}>
      {content}
    </button>
  );
}

export default Button;