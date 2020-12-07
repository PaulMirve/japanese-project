import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameConfirm } from '../topics_list';
import examples from './examples';

export default function Confirm() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <GrammarLesson> Verbo/Adjetivo-I/Adjetivo-NA + でしょうね </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Esta expresion se utiliza para hacer suposiciones sobre los sentimientos y emociones de un amigo o conocido al tener noticias sobre esa persona. ';
    return <Topic name={nameConfirm} grammar={Grammar} description={description} examples={examples} />
}
