import Link from "next/link";
import cn from "classnames";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import s from "./buttonArrow.module.scss";

const ButtonArrow = (props) => {
  const {
    direction = "forward" | "back",
    color = "red" | "blue",
    hasLink = false,
    href,
    className,
    onClick,
  } = props;

  return (
    <button
      className={cn(s.button, color === "red" ? s.red : s.blue, className)}
      onClick={onClick}
    >
      {hasLink ? (
        <Link href={href}>
          <a className={s.link}>
            {direction === "forward" ? (
              <ArrowForwardIosIcon />
            ) : (
              <ArrowBackIosNewIcon />
            )}
          </a>
        </Link>
      ) : direction === "forward" ? (
        <ArrowForwardIosIcon />
      ) : (
        <ArrowBackIosNewIcon />
      )}
    </button>
  );
};

export default ButtonArrow;
