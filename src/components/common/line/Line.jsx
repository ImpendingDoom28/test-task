import React from 'react';
import css from "./Line.module.css";

const Line = (margin, width) => {
    return (
        <hr className={css.line} />
    );
}

export default Line;