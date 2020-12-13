import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameThingsWeWantToDoInTheFuture } from '../topics_list';
import examples from './examples';

export default function ThingsWeWantToDoInTheFuture() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    Utilizamos la fórmula たいと思って (い) るんです cuando decimos lo que nos gustaría hacer en algún momento concreto del futuro. Se hace uso también de la forma たら puesto que, como es condicional,
                    el sentido de esta expresión se da al dar a entender que la segunda frase, se desea realizar una vez cumplido lo que diga la primera frase.
                </p>
            </>
        );
    };
    const description = 'Esta forma se utiliza para indicar cosas que queremos hacer en el futuro y metas, cosas que estamos seguros que lograremos.';
    return <Topic name={nameThingsWeWantToDoInTheFuture} grammar={Grammar} description={description} examples={examples} />
}
