import React from 'react';
import icon from "../../../../assets/deleteIcon.png";
import { ReactComponent as MenuIcon } from "../../../../assets/menu_outline_28.svg";
import css from "./Cover.module.css";

const Cover = ({ covers, elem, index, setCovers }) => {

    const onDragStart = (event, fakepath) => {
        event.dataTransfer.setData("fakepath", fakepath);
    }

    const createImgBlob = () => {
        const blobUrl = URL.createObjectURL(elem.file);
        return blobUrl;
    }

    const deleteElem = (id) => {
        console.log(id);
        const newCovers = [...covers];
        setCovers(newCovers.filter((elem, index) => {
            return id !== index;
        }));
    }

    return (
        <div
            id={index}
            draggable={true}
            className={css.coverWrapper}
            onDragStart={(event) => onDragStart(event, elem.fakepath)}
        >
            <img
                id={index}
                draggable={false}
                className={css.coverImg}
                src={createImgBlob()}
                alt=""
                onDragStart={(event) => onDragStart(event, elem.fakepath)}
            />
            <div className={css.coverSettings}>
                <div className={css.delete}>
                    <button onClick={() => deleteElem(index)}>
                        <img src={icon} alt="" />
                    </button>
                </div>
                <div className={css.menu}><MenuIcon /></div>
            </div>
        </div>
    );
}

export default Cover;