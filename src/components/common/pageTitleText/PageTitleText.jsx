import React from 'react';
import css from "./PageTitleText.module.css";
import Text from '../text/Text';

const PageTitleText = ({ titleText, subtitleText }) => {
    return (
        <div className={css.titleWrapper}>
            <Text type={"title"} text={titleText} />
            <Text type={"subtitle"} text={subtitleText} />
        </div>
    );
}

export default PageTitleText;