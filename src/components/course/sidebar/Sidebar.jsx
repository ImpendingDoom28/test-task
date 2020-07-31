import React from 'react';
import css from "./Sidebar.module.css";
import { ReactComponent as PhotoIcon } from "../../../assets/photos_stack_outline_24.svg";
import { ReactComponent as LessonsIcon } from "../../../assets/videocam_outline_28.svg";
import PageChangeButton from './pageChangeButton/PageChangeButton';
import Text from "../../common/text/Text";

const Sidebar = ({ currentPage, setCurrentPage, primaryButtonOnClick, photo, lessons }) => {
    return (
        <div className={css.sidebarWrapper}>
            <div className={css.buttonsPrimaryWrapper}>
                <button className={css.primaryButton} onClick={primaryButtonOnClick}>
                    <Text
                        type={"buttonText"}
                        text={"Сохранить"}
                    />
                </button>
            </div>
            <div className={css.buttonsSecondaryWrapper}>
                <PageChangeButton
                    setCurrentPage={setCurrentPage}
                    icon={<PhotoIcon className={(currentPage === photo ? css.selectedIcon : "")} />}
                    pageType={photo}
                    currentPage={currentPage}
                    buttonText={"Обложки и фото"}
                    className={css.photosButton}
                />
                <PageChangeButton
                    setCurrentPage={setCurrentPage}
                    icon={<LessonsIcon className={(currentPage === lessons ? css.selectedIcon : "")} />}
                    pageType={lessons}
                    currentPage={currentPage}
                    buttonText={"Уроки"}
                    className={css.lessonsButton}
                />
            </div>
        </div>
    );
}

export default Sidebar;