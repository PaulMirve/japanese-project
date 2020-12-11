import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameIntransitiveVerbs } from '../topics_list';
import examples from './examples';

export default function IntransitiveVerbs() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    La estructura para expresar una oración sin objeto directo es la siguiente:
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Sustantivo que indica objeto o cosa + が + verbo intransitivo.
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Los verbos intransitivos son aquellos que no neceseitan de un objeto directo para que la oración tenga sentido.';
    return <Topic name={nameIntransitiveVerbs} grammar={Grammar} description={description} examples={examples} />
}
