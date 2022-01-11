import React from 'react';
import icon from '../../../Assets/images/arrow-icon-1.png';

interface ButtonProps {
    text:string,
    btnName?:"btn-black"|"btn-blue"
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div className={props.btnName?`boxButton ${props.btnName}`:'boxButton btn-black'}>
            <span>{props.text}</span>
            <img src={icon} alt="" />
        </div>
    )
}

export default Button
