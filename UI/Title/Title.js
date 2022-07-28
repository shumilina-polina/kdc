import cn from "classnames";

import s from "./title.module.scss";

const Title = (props) => {
  const { className, children } = props;

  return (
    <div className={cn(s.wrapper, className)}>
      <h2>
        <span className={s.title}>{children}</span>
      </h2>
    </div>
  );
};

export default Title;
