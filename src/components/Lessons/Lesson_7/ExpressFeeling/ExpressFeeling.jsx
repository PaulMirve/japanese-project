import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic'
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameExpressFeelings } from '../topics_list';
import examples from './examples';

export default function ExpressFeeling() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    Se puede terminar la frase en cuestión con la forma ～て o ～で y dejar la oración
                    inconclusa, omitiendo la parte que expresa explícitamente el estado actual.
                </p>
                <p className={classes.description}>Para verbos:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo en forma て + いて/Verbo en forma て + いなくて
                    </GrammarLesson>
                </div>
                <p className={classes.description}>Para adjetivos い:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Adjetivo い + くて/Adjetivo い + くなくて
                    </GrammarLesson>
                </div>
                <p className={classes.description}>Para adjetivos な:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Adjetivo な + ざつで/Adjetivo な + くて
                    </GrammarLesson>
                </div>
                <p className={classes.description}>Para los sustantivos se utiliza la estructura:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Sustantivo + のことで
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Cuando queremos expresar la razón por la que nos encontramos en un determinado estado de ánimo o situación.';
    return <Topic name={nameExpressFeelings} grammar={Grammar} description={description} examples={examples} />
}
