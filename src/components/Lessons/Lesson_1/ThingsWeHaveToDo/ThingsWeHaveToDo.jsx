
import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic'
import useLessonStyles from '../../../CustomHooks/lesson_styles'
import { nameThingsWeHaveToDo } from '../topics_list';
import examples from './examples';

export default function ThingsWeHaveToDo() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Hay tres manera de expresar que hay algo que tenemos que hacer, todas coinciden en que se utliza el verbo en su forma diccionario negativa y se elimina el ない:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma diccionario negativa + なければなりません</GrammarLesson>
                    <GrammarLesson>Verbo en forma diccionario negativa + なきゃいけません</GrammarLesson>
                    <GrammarLesson>Verbo en forma diccionario negativa +　なきゃいけないんです</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Sirve para expresar tareas que tenemos que hacer.';
    return <Topic name={nameThingsWeHaveToDo} grammar={Grammar} description={description} examples={examples} />
}
