import React from 'react';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameThingsWeAreCapableOf } from '../topics_list';
import examples from './examples';

export default function ThingsWeAreCapableOf() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma diccionario + ことができます</GrammarLesson>
                </div>
            </>
        );
    };
    const description = 'Con esta expresión podemos explicar algo que somos capaces de hacer, o bien, preguntar al interlocutor si este es capaz de hacer algo.';
    return <Topic name={nameThingsWeAreCapableOf} grammar={Grammar} description={description} examples={examples} />
}
