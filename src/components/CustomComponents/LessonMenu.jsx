import React, { useEffect } from 'react';
import { Typography, Grid, makeStyles, Button } from '@material-ui/core';
import history from '../../history';

const useStyles = makeStyles(themes => ({
    title: {
        fontSize: 40,
        fontWeight: 100
    },
    btn: {
        textTransform: 'none',
        fontWeight: 300,
        marginTop: 10,
        borderColor: '#00171F',
        color: '#00171F'
    }
}));


export default function LessonMenu({ lessonName, topics }) {
    const classes = useStyles();
    useEffect(() => {
        document.title = lessonName;
    });
    return (
        <Grid container direction='column' alignContent='center'>
            <Typography align='center' className={classes.title}>{lessonName.toUpperCase()}</Typography>
            {topics.map((topic, index) => {
                return (
                    <Button key={index} onClick={() => history.push(topic.link)} variant='outlined' className={classes.btn}>
                        {topic.name}
                    </Button>
                );
            })}
        </Grid>
    )
}
