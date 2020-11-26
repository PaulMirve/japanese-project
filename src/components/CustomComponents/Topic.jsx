import React, { useEffect } from 'react';
import { Grid, Divider } from '@material-ui/core';
import Example from './Example';
import useLessonStyle from '../CustomHooks/lesson_styles';

export default function Topic({ name, description, grammar, examples }) {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = name;
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>{name}</p>
            <Divider />
            <p className={classes.description}>{description}</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            {grammar()}
            {examples ?
                <>
                    <p className={classes.subtitle}>Ejemplos</p>
                    <Divider />
                    {examples.map((example, index) => {
                        return <Example example={example.example} translation={example.translation} key={index} />
                    })}
                </> : null
            }
        </Grid>
    )
}
