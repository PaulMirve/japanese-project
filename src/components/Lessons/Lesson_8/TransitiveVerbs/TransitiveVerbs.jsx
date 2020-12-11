import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameTransitiveVerbs } from '../topics_list';
import examples from './examples';

export default function TransitiveVerbs() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    Los verbos transitivos siempre van acompañados de un objeto directo. Dicho objeto en la oración, deberá ir seguido de la partícula を. De esta manera, en la estructura de la oración se forma de la siguiente manera:
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Sustantivo que indica persona o pronombre personal + が / は + objeto + を + verbo transitivo
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Los verbos transitivos son aquellos que depedenden de un objeto directo para que la oración tenga sentido.';
    return <Topic name={nameTransitiveVerbs} grammar={Grammar} description={description} examples={examples} />
}
