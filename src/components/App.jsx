import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LessonOne from './Lessons/Lesson_1/LessonOne';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from '@material-ui/core';
import history from '../history';
import ImperativeForm from './Lessons/Lesson_1/ImperativeForm/ImperativeForm';

const useStyles = makeStyles(theme => ({
    navTitle: {
        fontWeight: 500,
        fontSize: 18,
        color: 'black'
    },
    navButton: {
        fontWeight: 300,
        color: 'black'
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
            <AppBar style={{ background: '#456e87' }} position='static'>
                <Toolbar>
                    <div className={classes.grow}>
                        <Typography className={classes.navTitle}>
                            <Link color='inherit' underline='none' onClick={() => history.push('/')} >Sexto Nivel</Link>
                        </Typography>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Button onClick={() => history.push('/lesson1')} className={classes.navButton} color="inherit">Lección 1</Button>
                        <Button className={classes.navButton} color="inherit">Lección 2</Button>
                        <Button className={classes.navButton} color="inherit">Lección 3</Button>
                        <Button className={classes.navButton} color="inherit">Lección 4</Button>
                        <Button className={classes.navButton} color="inherit">Lección 5</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ padding: 20 }}>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/lesson1' component={LessonOne} />
                <Route exact path='/imperative-form' component={ImperativeForm} />
            </div>
        </>
    )
}
