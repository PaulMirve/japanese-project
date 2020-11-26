import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Grid, Divider, Typography } from '@material-ui/core';
import examples from './pros_and_cons_examples';
import Example from '../../../CustomComponents/Example';

export default function ProsAndCons() {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = 'Manifestar ventajas y desventajas';
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>Manifestar ventajas y desventajas</p>
            <Divider />
            <p className={classes.description}>Podemos manifestar las ventajas y las desventajas de algo.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Desventajas de la situación + けど + Ventajas de la situación + から ＋ Resultado de la situación </Typography>
            </div>
            <p className={classes.subtitle}>Ejemplos</p>
            <Divider />
            {examples.map((example, index) => {
                return <Example example={example.example} translation={example.translation} key={index} />
            })}
        </Grid>
    )
}
