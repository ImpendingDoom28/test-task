import React from 'react';
import Text from "../../../common/text/Text";
import css from "./PageChangeButton.module.css";

const PageChangeButton = ({ setCurrentPage, currentPage, icon, buttonText, pageType, className }) => {

    const onClick = () => {
        setCurrentPage(pageType);
    }

    return (
        <button
            className={(currentPage === pageType ? css.selected : "") + " " + (className ? className : "") + " " + css.button}
            onClick={onClick}>
            {icon}
            <Text
                type={"buttonText"}
                text={buttonText}
            />
        </button>
    );
}

export default PageChangeButton;