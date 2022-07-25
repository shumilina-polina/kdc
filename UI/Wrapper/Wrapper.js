import cn from "classnames";

import s from "./wrapper.module.scss";

const Wrapper = (props) => {
  const {
    borderBottom = false,
    borderTop = false,
    space = false,
    className,
    children,
  } = props;

  const classNames =
    borderBottom && borderTop
      ? cn(s.borderTop, s.borderBottom)
      : !borderBottom && borderTop
      ? cn(s.borderTop)
      : borderBottom && !borderTop
      ? cn(s.borderBottom)
      : null;

  return (
    <div className={cn(classNames, className)}>
      <div className={s.padding}>
        <div className={cn(s.container, space ? s.space : null)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
