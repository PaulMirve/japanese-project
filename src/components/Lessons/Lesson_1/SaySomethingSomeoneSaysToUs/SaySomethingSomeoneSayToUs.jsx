import { Typography } from '@material-ui/core';
import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameSaySomethingSomeoneSaysToUs } from '../topics_list';
import examples from './examples';

export default function SaySomethingSomeoneSayToUs() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Se utiliza el verbo en su forma diccionario y al final del verbo se le agrega la って言ってます。</p>
                <div className={classes.grammarContainer}>
                    <Typography align='center' className={classes.description}>Verbo en forma diccionario + って言ってます。</Typography>
                </div>
            </>
        )
    };
    const description = 'Esta forma se utliza cuando queremos decir o mencionar algo que alguien nos dijo con anterioridad.';
    return <Topic name={nameSaySomethingSomeoneSaysToUs} grammar={Grammar} description={description} examples={examples} />
}
