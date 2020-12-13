import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameWishSomeoneToDoSomething } from '../topics_list';
import examples from './examples';

export default function WishSomeoneToDoSomethting() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    La A representa a la persona que manifiesta el deseo, mientras que la B representa a la
                    persona cuya acción se desea. La forma (verbo en forma-TE) + ほしいです se suele usar
                    cuando el sujeto es la primera persona gramatical.
                    Si queremos expresar que es una tercera persona la que siente el deseo, es frecuente
                    utilizar la estructura (verbo en forma-TE).
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma て　+ ほしいです/ Verbo en forma diccionario negativa + ほしいです</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Cuando queremos manifestar nuestro deseo de que alguien haga algo, utilizamos la construcción (A は B に verbo en forma-TE) + ほしいです.';
    return <Topic name={nameWishSomeoneToDoSomething} grammar={Grammar} description={description} examples={examples} />
}
