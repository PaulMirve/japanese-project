import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Grid, Divider, Typography } from '@material-ui/core';

export default function Troubles() {
    const classes = useLessonStyle();
    useEffect(() => {
        document.title = 'Transmitir aglún problema';
    });
    return (
        <Grid container direction='column'>
            <p className={classes.title}>Transmitir algún problema</p>
            <Divider />
            <p className={classes.description}>Podemos señalar que tenemos problemas con algo o que algo no nos agrado usando KEDO al final de una oración.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Oración + Verbo en forma diccionario + ndesukedo</Typography>
            </div>

            <p className={classes.subtitle}>Ejemplos</p>
            <Divider />
        </Grid>
    )
}
