import React from 'react';
import { makeStyles, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    texts: {
        fontFamily: 'Roboto, sans- serif',
        fontWeight: 300
    },
    description: {
        fontSize: 20,
        fontFamily: 'Roboto, sans- serif',
        fontWeight: 100
    },
    title: {
        fontSize: 45,
        fontFamily: 'Roboto, sans- serif',
        fontWeight: 100
    },
    subtitle: {
        fontSize: 30,
        fontFamily: 'Roboto, sans- serif',
        fontWeight: 100
    },
    headers: {
        fontFamily: 'Roboto, sans- serif',
        textAlign: 'center'
    }
}));

export default function ImperativeForm() {
    const classes = useStyles();

    return (
        <Grid container direction='column'>
            <p className={classes.title}>Forma  Imperativa</p>
            <Divider />
            <p className={classes.description}>Se utiliza para decir la forma imperativa del verbo.</p>
            <p className={classes.subtitle}>Grámatica</p>
            <Divider />
            <p className={classes.description}>Para verbos del grupo 1, se sustituye la ultima silaba por su forma e.</p>
            <Grid container>
                <Grid item xs={4}>
                    <p className={classes.headers}>Verbos del Grupo 1</p>
                    <ul>
                        <li>ganbaru -> ganbare</li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <p className={classes.headers}>Verbos del Grupo </p>
                </Grid>
                <Grid item xs={4}>
                    <p className={classes.headers}>Verbos del Grupo 3</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
