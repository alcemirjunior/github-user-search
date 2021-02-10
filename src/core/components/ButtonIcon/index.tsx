import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (

    <button className="btn">
        <h5 className="btn-text">
            {text}
        </h5>
    </button>

);

export default ButtonIcon;