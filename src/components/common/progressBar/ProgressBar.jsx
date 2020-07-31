import React from 'react';
import css from "./ProgressBar.module.css";

const ProgressBar = ({ barColor, completed }) => {

    const progressBarStyles = {
        width: `${completed}%`,
        backgroundColor: barColor
    }

    return (
        <div className={css.wrapper}>
            <div className={css.progressBar} style={progressBarStyles}>
            </div>
        </div>
    );
}

export default ProgressBar;