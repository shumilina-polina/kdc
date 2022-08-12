import cn from "classnames";

import s from "./mapButton.module.scss";

const MapButton = (props) => {
  const { children, className, onClick = () => false, isActive } = props;

  return (
    <button
      className={cn(s.button, className, isActive ? s.active : null)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MapButton;
