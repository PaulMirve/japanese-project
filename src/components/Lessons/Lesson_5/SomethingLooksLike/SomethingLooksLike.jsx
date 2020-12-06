import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameSomethingLooksLike } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import examples from './examples';

export default function SomethingLooksLike() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Se toma un verbo en su forma potencial, se elimina el ます y se le agrega そう.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma potencial + そう / Verbo en forma potencial + そうな + Sustantivo</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Esta forma sirve para expresar algo que percibimos que alguien o algo es o puede hacer.';
    return <Topic name={nameSomethingLooksLike} grammar={Grammar} description={description} examples={examples} />
}
