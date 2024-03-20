import React from 'react';
import './styles.css';

type Props = {
    btnText : string | JSX.Element | JSX.Element[]
}

const Button = ({btnText} : Props) => {

    return (
        <button className="btn card-button">
            {btnText}
        </button>
    );

}

export default Button;