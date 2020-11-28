import React from 'react';
import { Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from '@material-ui/core';
import history from '../history';
import routes from './routes';

const useStyles = makeStyles(theme => ({
    navTitle: {
        fontWeight: 500,
        fontSize: 18,
        color: 'white'
    },
    navButton: {
        fontWeight: 300,
        color: 'white'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <>
            <AppBar style={{ background: '#003459' }} position='static'>
                <Toolbar>
                    <div className={classes.grow}>
                        <Typography className={classes.navTitle}>
                            <Link color='inherit' underline='none' onClick={() => history.push('/')} >Sexto Nivel</Link>
                        </Typography>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Button onClick={() => history.push('/lesson1')} className={classes.navButton} color="inherit">Lección 1</Button>
                        <Button onClick={() => history.push('/lesson2')} className={classes.navButton} color="inherit">Lección 2</Button>
                        <Button onClick={() => history.push('/lesson3')} className={classes.navButton} color="inherit">Lección 3</Button>
                        <Button onClick={() => history.push('/lesson4')} className={classes.navButton} color="inherit">Lección 4</Button>
                        <Button onClick={() => history.push('/lesson5')} className={classes.navButton} color="inherit">Lección 5</Button>
                        <Button onClick={() => history.push('/lesson6')} className={classes.navButton} color="inherit">Lección 6</Button>
                        <Button onClick={() => history.push('/lesson7')} className={classes.navButton} color="inherit">Lección 7</Button>
                        <Button onClick={() => history.push('/lesson8')} className={classes.navButton} color="inherit">Lección 8</Button>
                        <Button onClick={() => history.push('/lesson9')} className={classes.navButton} color="inherit">Lección 9</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10 }}>
                {routes.map(route => {
                    return <Route exact path={route.route} component={route.component} />
                })}
            </div>
        </>
    )
}
