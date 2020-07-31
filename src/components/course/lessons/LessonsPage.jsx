import React, { useState } from 'react';
import css from "./LessonsPage.module.css";
import PageTitleText from "../../common/pageTitleText/PageTitleText";
import Line from "../../common/line/Line";
import Lesson from "./lesson/Lesson";

const LessonsPage = () => {

    const [lessons, setLessons] = useState([{}, {}])

    return (
        <div className={css.contentWrapper}>
            <PageTitleText
                titleText={
                    "Уроки"
                }
                subtitleText={
                    "В системе можно для курса загрузить несколько уроков"
                }
            />
            <Line />
            <section className={css.sectionWrapper}>
                {
                    lessons.map((elem, index) => (
                        <>
                            <Lesson
                                lesson={elem}
                                index={index}
                            />
                            <Line />
                        </>
                    ))
                }
            </section>
        </div>
    );
}

export default LessonsPage;