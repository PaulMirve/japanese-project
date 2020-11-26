import React from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Typography } from '@material-ui/core';
import examples from './desition_reasons_examples';
import Topic from '../../../CustomComponents/Topic';

export default function DesitionReasons() {
    const classes = useLessonStyle();
    const Grammar = () => {
        return (
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Motivo de la desición + から + resultado de la desición</Typography>
            </div>
        );
    }

    const description = 'Podemos señalar el motivo de una descición utilizando esta forma.';
    return <Topic name='Razones de una desición' grammar={Grammar} description={description} examples={examples} />
}
