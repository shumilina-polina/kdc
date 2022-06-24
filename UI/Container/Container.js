import cn from "classnames";

import s from "./container.module.scss";

const Container = (props) => {
  const { className, noPaddingMobile = false, children } = props;
  return (
    <div
      className={cn(
        s.container,
        className,
        noPaddingMobile ? s.noPadding : null
      )}
    >
      {children}
    </div>
  );
};

export default Container;
