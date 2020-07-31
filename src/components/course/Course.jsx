import React, { useState } from 'react';
import LessonsPage from "./lessons/LessonsPage";
import PhotoAndCoversPage from "./photoAndCovers/PhotoAndCoversPage";
import css from "./Course.module.css";
import Text from "../common/text/Text";
import Sidebar from './sidebar/Sidebar';

const Course = () => {

    const PHOTO_PAGE = "PHOTO_PAGE",
        LESSONS_PAGE = "LESSONS_PAGE";

    const photoAndCoversSave = () => {
        if (covers.length === 0) return;
        let array = [];
        for (let i = 0; i < covers.length; i++) {
            array.push(covers[i]);
        }
        localStorage.setItem("coversArray", JSON.stringify(array));
    }

    const getInitialStateCovers = () => {
        let savedCovers = [];
        let array = JSON.parse(localStorage.getItem("coversArray"));
        console.log(array);
        // let coversFile = localStorage.getItem("coversFile" + i);
        // let coversFakepath = localStorage.getItem("coversFakepath" + i);
        // while (coversFile !== null && coversFile !== "" && i < 5) {
        //     console.log(`coversFile${i}:`);
        //     console.log(coversFile);
        //     savedCovers[i++] = {
        //         file: coversFile,
        //         fakepath: coversFakepath
        //     }
        //     coversFile = localStorage.getItem("coversFile" + i);
        //     coversFakepath = localStorage.getItem("coversFakepath" + i);
        // }
        return savedCovers;
    }

    const initialStateCovers = getInitialStateCovers();

    const [currentPage, setCurrentPage] = useState(PHOTO_PAGE);
    const [covers, setCovers] = useState(initialStateCovers);

    return (
        <div className={css.courseWrapper}>
            <div className={css.titleWrapper}>
                <Text
                    type={"largeTitle"}
                    text={"Курс: Название курса будет здесь"}
                />
            </div>
            <section className={css.courseSettingsWrapper}>
                <div className={css.courseCurrentSettingWrapper}>
                    {
                        currentPage === PHOTO_PAGE ? (
                            <PhotoAndCoversPage
                                covers={covers}
                                setCovers={setCovers}
                            />
                        ) : (
                                <LessonsPage />
                            )
                    }
                </div>
                <Sidebar
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    primaryButtonOnClick={photoAndCoversSave}
                    lessons={LESSONS_PAGE}
                    photo={PHOTO_PAGE}
                />
            </section>
        </div>
    );
}

export default Course;