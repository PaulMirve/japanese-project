import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Grid, Divider, Typography } from '@material-ui/core';
import examples from './troubles_examples';
import Example from '../../../CustomComponents/Example';

export default function Troubles() {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = 'Transmitir aglún problema';
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>Transmitir algún problema</p>
            <Divider />
            <p className={classes.description}>Podemos señalar que tenemos problemas con algo o que algo no nos agrado usando けど al final de una oración.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Oración + Verbo en forma diccionario + んですけど</Typography>
            </div>

            <p className={classes.subtitle}>Ejemplos</p>
            <Divider />
            {examples.map((example, index) => {
                return <Example example={example.example} translation={example.tranlation}/>
            })}
        </Grid>
    )
}
