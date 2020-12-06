import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameLooksLike } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { Typography } from '@material-ui/core';
import examples from './examples';

export default function LooksLike() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <Typography align='center' className={classes.description}>
                        Objeto al que señalaremos la semejanza + は ＋ semejanza +みたいです
                    </Typography>
                    <Typography align='center' className={classes.description}>
                        Objeto al que señalaremos la semejanza + は ＋ semejanza +みたいな
                    </Typography>
                </div>
            </>
        );
    }

    const description = 'Nos sirve para señalar semejanzas entre dos cosas.';
    return <Topic name={nameLooksLike} grammar={Grammar} description={description} examples={examples} />
}
