import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameDoSomethingWhileDoOtherThing } from '../topics_list';
import examples from './examples';

export default function DoSomethingWhileDoOtherThing() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Se quita el ます del verbo que se esta realizando y se agrega el segúndo verbo que se hace simultaneamente.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo 1 + ながら + Verbo 2
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Esta forma nos sirve para describir que una alguién esta realizando dos acciones al mismo tiempo.';
    return <Topic name={nameDoSomethingWhileDoOtherThing} grammar={Grammar} description={description} examples={examples} />
}
