import cn from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";

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

  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <button
      className={cn(s.button, className, v ? s.ability : null)}
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
