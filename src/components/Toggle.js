import React from "react";
import cx from "classnames";
import { FiClock} from "react-icons/fi";

const Toggle = ({rounded = false, isToggled, onToggle}) => {
    
    const sliderCX = cx('slider', {
        'rounded': rounded
    });
    
    return <label className="toggle">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className={sliderCX} />
        </label>
};

export default Toggle;