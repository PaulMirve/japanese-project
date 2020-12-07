import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameThingsWeThinkWillDoInTheFuture } from '../topics_list';
import examples from './examples';

export default function ThingsWeThinkWillDoInTheFuture() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
            <div className={classes.grammarContainer}>
                <GrammarLesson>Verbo en forma volitiva + と思うのですが</GrammarLesson>
            </div>
            </>
        );
    }
    const description = 'Esta es una expresión que utilizamos para comunicar nuestra intención personal de llevar a cabo una acción o actividad antes de invitar al interlocutor a compartir dicha actividad o pedir su opinión al respecto.';
    return <Topic name={nameThingsWeThinkWillDoInTheFuture} grammar={Grammar} description={description} examples={examples} />
}
