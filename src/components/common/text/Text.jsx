import React from 'react';
import css from "./Text.module.css";

const Text = ({ type, text }) => {

    const checkTextType = () => {
        switch (type) {
            case "subtitle":
                return <div className={css.subtitle}>{text}</div>;
            case "title":
                return <div className={css.title}>{text}</div>;
            case "smallerTitle":
                return <div className={css.smallerTitle}>{text}</div>
            case "smallTitle":
                return <div className={css.smallTitle}>{text}</div>
            case "largeTitle":
                return <h1 className={css.largeTitle}>{text}</h1>
            case "buttonText":
                return <div className={css.buttonText}>{text}</div>
            case "largeInputText":
                return <div className={css.largeInputText}>{text}</div>
            default:
                return <div className={css.error}>Incorrect type</div>
        }
    }

    return (
        <>
            {checkTextType()}
        </>
    );
}

export default Text;