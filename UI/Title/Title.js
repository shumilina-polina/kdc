import cn from "classnames";

import s from "./title.module.scss";

const Title = (props) => {
  const { className, children } = props;

  return (
    <div className={s.wrapper}>
      <h2>
        <span className={cn(s.title, className)}>{children}</span>
      </h2>
    </div>
  );
};

export default Title;
