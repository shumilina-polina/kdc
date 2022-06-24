import cn from "classnames";
import Link from "next/link";

import s from "./button.module.scss";

const Button = (props) => {
  const { hasLink = false, href, className, children, onClick } = props;

  return (
    <button className={cn(s.button, className)} onClick={onClick}>
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
