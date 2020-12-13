import React from 'react';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameCompareActions } from '../topics_list';
import examples from './examples';


export default function CompareActions() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Primero especificamos el verbo que no se nos da bien y agregamos より seguido del verbo en el cual somos buenos en su forma diccionario y agregando ほうがいいです.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo que no se nos da bien en forma diccionario + より + Verbo que se nos da bien + ほうがいいです</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Que podemos comparar habilidades o capacidades de manera subjetiva, o bien, actividades que clasificamos según nuestros gustos.';
    return <Topic name={nameCompareActions} grammar={Grammar} description={description} examples={examples} />
}
