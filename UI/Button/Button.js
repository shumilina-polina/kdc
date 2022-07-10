import cn from "classnames";
import Link from "next/link";

import s from "./button.module.scss";

const Button = (props) => {
  const {
    hasLink = false,
    href,
    className,
    children,
    onClick,
    disabled = false,
  } = props;

  return (
    <button
      className={cn(s.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {hasLink ? (
        <Link href={href}>
          <a className={s.link}>{children}</a>
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
