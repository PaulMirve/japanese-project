import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameNotBeSureOfSomething } from '../topics_list';
import examples from './examples';

export default function NotBeSureOfSomething() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    Usamos la construcción (Verbo en forma diccionario) + かもしれません. Si en lugar del verbo usamos un adjetivo-I o un adjetivo-NA, estos también van seguidos de かもしれません.
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo en forma diccionario/Adjetivo い/Adjetivo な + かもしれません。
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Cuando, en lugar de una afirmación categórica, queremos manifestar algo como una posibilidad, utilizamos esta forma.';
    return <Topic name={nameNotBeSureOfSomething} grammar={Grammar} description={description} examples={examples} />
}
