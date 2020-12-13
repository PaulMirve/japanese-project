import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameDifferingResults } from '../topics_list';
import examples from './examples';

export default function DifferingResults() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    En la frase 1 expresamos los hechos objetivos y en la frase 2, el acontecimiento inesperado. El verbo que aparece en la frase 1 va en la forma diccionario:
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Frase 1 + のに、 + Frase 2
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Cuando queremos expresar nuestra disconformidad, insatisfacción o preocupación porque las cosas no han salido según lo esperado.';
    return <Topic name={nameDifferingResults} grammar={Grammar} description={description} examples={examples} />
}
