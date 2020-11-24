import React from 'react'
import { Typography, Grid, makeStyles, Button } from '@material-ui/core';
import history from '../../../history';

const useStyles = makeStyles(themes => ({
    title: {
        fontSize: 40,
        fontWeight: 100
    },
    btn: {
        textTransform: 'none',
        fontWeight: 300,
        marginTop: 10
    }
}));

export default function LessonOne() {
    const classes = useStyles();
    return (
        <Grid container direction='column' alignContent='center'>
            <Typography align='center' className={classes.title}>LECCIÓN 1</Typography>
            <Button onClick={() => history.push('/imperative-form')} variant='outlined' className={classes.btn}>
                Forma Imperativa
            </Button>
            <Button variant='outlined' className={classes.btn}>
                Transmitir algo con lo que tenemos problema
            </Button>
            <Button variant='outlined' className={classes.btn}>
                Dar razones de una desición
            </Button>
            <Button variant='outlined' className={classes.btn}>
                Mostrar ventajas y desventajas de un criterio
            </Button>
        </Grid>
    )
}
