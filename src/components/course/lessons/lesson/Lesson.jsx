import React, { useState } from 'react';
import Text from "../../../common/text/Text";
import css from "./Lesson.module.css";
import arrow from "../../../../assets/arrowUp.png";
import { ReactComponent as UploadIcon } from "../../../../assets/upload.svg";
import coverIcon from "../../../../assets/gallery.png";
import ProgressBar from '../../../common/progressBar/ProgressBar';

const Lesson = ({ lesson, index }) => {

    const videoRef = React.createRef();
    const coverRef = React.createRef();
    const [isOpened, setOpened] = useState(false);
    const [selectedCover, setSelectedCover] = useState();
    const [isVideoSelected, setVideoSelected] = useState(false);
    const [lessonName, setLessonName] = useState();
    const [description, setDescription] = useState();
    const acceptedVideoFormats = "video/mp4,video/x-m4v,video/*";
    const acceptedCoverFormats = "image /x-png,image/gif,image/jpeg";

    const changeOpenState = () => {
        setOpened(!isOpened);
    }

    const changeVideoSelectedState = (event) => {
        const { target } = event;
        if (target.value.length > 0) {
            setVideoSelected(true);
        } else {
            setVideoSelected(false);
        }
    }

    const displayCover = (event) => {
        setSelectedCover(URL.createObjectURL(event.target.files[0]));
    }

    const displayLoader = (event) => {
        console.log("Скоро буду");
    }

    const showFileBrowser = (event, name) => {
        event.preventDefault();
        switch (name) {
            case "video":
                videoRef.current.click();
                break;
            case "cover":
                coverRef.current.click();
                break;
        }
    }

    return (
        <div>
            <div className={css.lesson}>
                <Text
                    type={"smallTitle"}
                    text={`Урок ${index + 1}`}
                />
                <img src={arrow} alt="" onClick={changeOpenState} className={isOpened ? css.rotate : css.stay}></img>
            </div>
            {
                isOpened &&
                <>
                    <div className={css.subtitleWrapper}>
                        <Text
                            type={"subtitle"}
                            text={"Назовите и кратко расскажите, что будет содержаться в этом конкретном уроке. Так Вы поможете лучше понять, что содержится в вашем курсе. Но вообще, описание необязательно"}
                        />
                    </div>
                    <div className={css.inputsWrapper}>
                        <div className={css.textWrapper}></div>
                        <div className={css.videoInput + " " + css.mb}>
                            <input type="file" className={css.fileInput} ref={videoRef} onChange={changeVideoSelectedState} accept={acceptedVideoFormats} />
                            <button className={css.videoButton} onClick={(event) => showFileBrowser(event, "video")}>
                                <div className={css.buttonContent}>
                                    {isVideoSelected ? (
                                        <div className={css.loaderWrapper}>
                                            <div className={css.videoSelectedText}>
                                                <Text
                                                    type={"subtitle"}
                                                    text={"Ваше видео загружается"}
                                                />
                                            </div>
                                            <ProgressBar
                                                barColor={"#434DFF"}
                                                completed={60}
                                            />
                                        </div>
                                    ) : (
                                            <>
                                                <UploadIcon />
                                                <Text
                                                    type={"largeInputText"}
                                                    text={"Загрузить видео урока"}
                                                />
                                            </>
                                        )
                                    }
                                </div>
                            </button>
                        </div>
                        <div className={css.textWrapper}>
                            <Text
                                type={"subtitle"}
                                text={"Обложка:"}
                            />
                        </div>
                        <div className={css.coverInput + " " + css.mb}>
                            <input type="file" className={css.fileInput} ref={coverRef} onChange={displayCover} accept={acceptedCoverFormats} />
                            <button className={css.coverButton} onClick={(event) => showFileBrowser(event, "cover")}>
                                <div className={css.coverButtonContent}>
                                    <img src={coverIcon} alt="" />
                                    <Text
                                        type={"subtitle"}
                                        text={(selectedCover ? "Изменить" : "Загрузить") + " обложку"}
                                    />
                                </div>
                            </button>
                            {selectedCover && <img src={selectedCover} className={css.cover} alt=""></img>}
                        </div>
                        <div className={css.textWrapper}>
                            <Text
                                type={"subtitle"}
                                text={"Название урока:"}
                            />
                        </div>
                        <div className={css.nameInput + " " + css.mb}>
                            <input type="text" value={lessonName} onChange={(event) => setLessonName(event.target.value)} />
                        </div>
                        <div className={css.textWrapper}>
                            <div className={css.descriptionWrapper}>
                                <Text
                                    type={"subtitle"}
                                    text={"Описание:"}
                                />
                            </div>
                        </div>
                        <div className={css.descriptionInput + " " + css.mb}>
                            <textarea onChange={(event) => setDescription(event.target.value)}>{description}</textarea>
                        </div>
                    </div>
                </>
            }
        </div >
    );
}

export default Lesson;