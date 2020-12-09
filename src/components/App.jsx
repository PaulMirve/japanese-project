import React from 'react';
import { Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from '@material-ui/core';
import history from '../history';
import LandingPage from './LandingPage';
import LessonSix from './Lessons/Lesson_6/LessonSix';
import { urlConfirm, urlDoSomethingForSomeone, urlThingsWeThinkWillDOInTheFuture } from './Lessons/Lesson_6/topics_list';
import Confirm from './Lessons/Lesson_6/Confirm/Confirm';
import DoSomethingForSomeone from './Lessons/Lesson_6/DoSomethingForSomeone/DoSomethingForSomeone';
import ThingsWeThinkWillDoInTheFuture from './Lessons/Lesson_6/ThingsWeThinkWillDoInTheFuture/ThingsWeThinkWillDoInTheFuture';
import LessonSeven from './Lessons/Lesson_7/LessonSeven';
import { urlDifferingResults, urlExpressFeelings, urlNotBeSureOfSomething, urlWishSomeoneToDoSomething } from './Lessons/Lesson_7/topics_list';
import DifferingResults from './Lessons/Lesson_7/DifferingResults/DifferingResults';
import ExpressFeeling from './Lessons/Lesson_7/ExpressFeeling/ExpressFeeling';
import WishSomeoneToDoSomethting from './Lessons/Lesson_7/WishSomeoneToDoSomething/WishSomeoneToDoSomethting';
import NotBeSureOfSomething from './Lessons/Lesson_7/NotBeSureOfSomething/NotBeSureOfSomething';
import LessonEight from './Lessons/Lesson_8/LessonEight';
import { urlDoSomethingWhileDoOtherThing, urlRememberWhatYouWhereDoing, urlTransitiveVerbs } from './Lessons/Lesson_8/topics_list';
import DoSomethingWhileDoOtherThing from './Lessons/Lesson_8/DoSomethingWhileDoOtherThing/DoSomethingWhileDoOtherThing';
import RememberWhatYouWhereDoing from './Lessons/Lesson_8/RememberWhatYouWhereDoing/RememberWhatYouWhereDoing';
import TransitiveVerbs from './Lessons/Lesson_8/TransitiveVerbs/TransitiveVerbs';
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
                <Route exact path='/' component={LandingPage} />
                {routes.map((route, index) => {
                    return <Route key={index} exact path={route.route} component={route.component} />
                })}
                <Route exact path='/lesson6' component={LessonSix} />
                <Route exact path={urlConfirm} component={Confirm} />
                <Route exact path={urlDoSomethingForSomeone} component={DoSomethingForSomeone} />
                <Route exact path={urlThingsWeThinkWillDOInTheFuture} component={ThingsWeThinkWillDoInTheFuture} />
                <Route exact path='/lesson7' component={LessonSeven} />
                <Route exact path={urlNotBeSureOfSomething} component={NotBeSureOfSomething} />
                <Route exact path={urlDifferingResults} component={DifferingResults} />
                <Route exact path={urlExpressFeelings} component={ExpressFeeling} />
                <Route exact path={urlWishSomeoneToDoSomething} component={WishSomeoneToDoSomethting} />
                <Route exact path='/lesson8' component={LessonEight} />
                <Route exact path={urlDoSomethingWhileDoOtherThing} component={DoSomethingWhileDoOtherThing} />
                <Route exact path={urlRememberWhatYouWhereDoing} component={RememberWhatYouWhereDoing} />
                <Route exact path={urlTransitiveVerbs} component={TransitiveVerbs} />
            </div>
        </>
    )
}
