import React from 'react';
import css from "./PhotoAndCovers.module.css";
import { ReactComponent as AddCoverIcon } from "../../../assets/add_square_outline_28 @ follow.svg";
import PageTitleText from "../../common/pageTitleText/PageTitleText";
import Text from "../../common/text/Text";
import Cover from './cover/Cover';
import Line from "../../common/line/Line";

const PhotoAndCoversPage = ({ covers, setCovers }) => {

    const fileInputRef = React.createRef();
    const acceptedCoverTypes = "image /x-png,image/gif,image/jpeg";

    const showFileBrowser = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    const checkToAddCover = (event) => {
        const { target } = event;
        if (target.value.length > 0) {
            addCover(event.target.files[0]);
        }
    }

    const addCover = (file) => {
        if (fileInputRef.current.value !== null &&
            fileInputRef.current.value !== undefined &&
            fileInputRef.current.value !== "") {
            const newCovers = [...covers];
            newCovers.push({
                file,
                fakepath: fileInputRef.current.value
            });
            setCovers(newCovers);
        }
    }

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const onDrop = (event) => {
        let dropableElem = event.dataTransfer.getData("fakepath");
        let newCovers = [...covers];
        let neededIndex;
        let newObject;
        let filteredCovers = newCovers.filter((elem, index) => {
            if (dropableElem !== elem.fakepath) {
                if (event.target.id == index) neededIndex = index;
                return true;
            } else {
                newObject = {
                    file: elem.file,
                    fakepath: dropableElem
                }
                return false;
            }
        });
        filteredCovers.splice(neededIndex, 0, newObject);
        setCovers(filteredCovers);
    }

    return (
        <div className={css.contentWrapper}>
            <PageTitleText
                titleText={
                    "Превью и обложки курса"
                }
                subtitleText={
                    "Красивые обложки будут дополнительно притягивать и рекламировать Ваш курс"
                }
            />
            <Line />
            <section className={css.sectionWrapper}>
                <div className={css.buttonWrapper}>
                    <input type="file" ref={fileInputRef} accept={acceptedCoverTypes} style={{ display: "none" }} onChange={checkToAddCover} />
                    <button onClick={showFileBrowser}>
                        <AddCoverIcon />
                        <div className={css.buttonText}>Добавить обложку</div>
                    </button>
                </div>
                <div className={css.buttonSubtextWrapper}>
                    <Text
                        type={"subtitle"}
                        text={"Вы можете добавить до 5 фото, размером не более 10 мб."}
                    />
                    <Text
                        type={"subtitle"}
                        text={"Размещайте важную информацию ближе к центру изображения."}
                    />
                </div>
                <div className={css.coversWrapper}>
                    <div>
                        <Text
                            type={"smallerTitle"}
                            text={"Загруженные обложки"}
                        />
                    </div>
                    <div
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        className={css.covers}
                    >
                        {
                            covers.length > 0 &&
                            covers.map((elem, index) => {
                                return (
                                    <Cover
                                        key={index}
                                        elem={elem}
                                        index={index}
                                        covers={covers}
                                        setCovers={setCovers}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PhotoAndCoversPage;