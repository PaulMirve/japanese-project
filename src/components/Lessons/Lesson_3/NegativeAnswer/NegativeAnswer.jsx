import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameNegativeAnswer } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { Typography } from '@material-ui/core';
import examples from './examples';

export default function NegativeAnswer() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <Typography align='center' className={classes.description}>
                        Adjetivo イ／ナ en forma ない cuando hacemos una pregunta.
                </Typography>
                </div>
            </>
        );
    }
    const descripcion = 'Nos sirve para hacer preguntas en negativo y reafirmar aspectos de la pregunta.';
    return <Topic name={nameNegativeAnswer} grammar={Grammar} description={descripcion} examples={examples} />
}
