import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LessonOne from './Lessons/Lesson_1/LessonOne';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from '@material-ui/core';
import history from '../history';
import ImperativeForm from './Lessons/Lesson_1/ImperativeForm/ImperativeForm';
import Troubles from './Lessons/Lesson_2/Troubles/Troubles';
import DesitionReasons from './Lessons/Lesson_1/DesitionReasons/DesitionReasons';
import ProsAndCons from './Lessons/Lesson_1/ProsAndCons/ProsAndCons';
import LessonTwo from './Lessons/Lesson_2/LessonTwo';
import LessonTree from './Lessons/Lesson_3/LessonTree';
import LessonFour from './Lessons/Lesson_4/Lesson4';

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
                        <Button className={classes.navButton} color="inherit">Lección 3</Button>
                        <Button className={classes.navButton} color="inherit">Lección 4</Button>
                        <Button className={classes.navButton} color="inherit">Lección 5</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10 }}>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/lesson1' component={LessonOne} />
                <Route exact path='/lesson2' component={LessonTwo} />
                <Route exact path='/lesson3' component={LessonTree} />
                <Route exact path='/lesson4' component={LessonFour} />
                <Route exact path='/imperative-form' component={ImperativeForm} />
                <Route exact path='/transmit-feeling' component={Troubles} />
                <Route exact path='/desition-reasons' component={DesitionReasons} />
                <Route exact path='/pros-and-cons' component={ProsAndCons} />
            </div>
        </>
    )
}
