import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Grid, Divider, Typography } from '@material-ui/core';
import examples from './troubles_examples';
import Example from '../../../CustomComponents/Example';

export default function Conditional() {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = 'Condicional';
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>Condicional</p>
            <Divider />
            <p className={classes.description}>Sirve para expresar una hipótesis o una acción que no pasaría si ocurriera otra acción.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Para verbos del grupo 1 se intercambia la silaba antes del ます por su forma /e/ y se agrega la silaba ば. Para verbos del grupo 2 se sustituye el ます por られば. En los verbos del grupo 3 </Typography>
            </div>
            <p className={classes.subtitle}>Ejemplos</p>
            <Divider />
            {examples.map((example, index) => {
                return <Example example={example.example} translation={example.tranlation} />
            })}
        </Grid>
    )
}
