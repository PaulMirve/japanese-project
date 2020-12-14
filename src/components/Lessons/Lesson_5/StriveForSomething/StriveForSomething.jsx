import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameStriveForSomething } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import examples from './examples';

export default function StriveForSomething() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Cosas que intentamos hacer/ no hacer activamente.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo en ふつう + ように  / Verbo en forma　ない + ように + しています。
                    </GrammarLesson>
                </div>
                <p className={classes.description}>Hablando de una habilidad que hemos adquirido/ perdido.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo en forma potencial + ように + なりました /  Verbo en forma potencial  + ない + ように + なりました。
                    </GrammarLesson>
                </div>
                <p className={classes.description}>Explicando que estamos realizando una accion para alcanzar alguna meta.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo 1 en forma potencial + ように + Verbo 2
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Podemos usar la forma ように con diferentes propósitos como decir algo por lo que nos hemos esforzado, una nueva habilidad que hemos adquirido o explicar una acción que estamos haciendo para alcanzar o realizar algo.';
    return <Topic name={nameStriveForSomething} grammar={Grammar} description={description} examples={examples} />
}
