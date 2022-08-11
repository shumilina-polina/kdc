import cn from "classnames";

import s from "./mapControl.module.scss";

const MapControlButton = (props) => {
    const {
        children,
        onClick,
        className,
    } = props

    return (
        <button className={cn(s.button, className)} onClick={onClick}>
            {children}
        </button>
    )
}

export default MapControlButton;