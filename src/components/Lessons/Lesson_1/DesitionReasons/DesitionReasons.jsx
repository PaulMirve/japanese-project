import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Grid, Divider, Typography } from '@material-ui/core';
import examples from './desition_reasons_examples';
import Example from '../../../CustomComponents/Example';

export default function DesitionReasons() {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = 'Razones de una desición';
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>Razones de una desición</p>
            <Divider />
            <p className={classes.description}>Podemos señalar el motivo de una descición utilizando esta forma.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Motivo de la desición + から + resultado de la desición</Typography>
            </div>

            <p className={classes.subtitle}>Ejemplos</p>
            <Divider />
            {examples.map((example, index) => {
                return <Example example={example.example} translation={example.translation} />
            })}
        </Grid>
    )
}
