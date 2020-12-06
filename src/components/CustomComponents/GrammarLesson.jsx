import React from 'react'
import useLessonStyles from '../CustomHooks/lesson_styles';
import { Typography } from '@material-ui/core';

export default function GrammarLesson({ children }) {
    const classes = useLessonStyles();
    return (
        <Typography align='center' className={classes.description}>{children}</Typography>
    )
}
