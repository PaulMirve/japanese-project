import React from 'react';
import { Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from '@material-ui/core';
import history from '../history';
import { urlDesitionReasons, urlSaySomethingSomeoneSaysToUs, urlSustantivateAdjectives, urlTheTruthIs, urlThingsWeHaveToDo } from './Lessons/Lesson_1/topics_list';
import DesitionReasons from './Lessons/Lesson_1/DesitionReasons/DesitionReasons';
import SustantivateAdjective from './Lessons/Lesson_1/SustantivateAdjective/SustantivateAdjective';
import SaySomethingSomeoneSaysToUs from './Lessons/Lesson_1/SaySomethingSomeoneSaysToUs/SaySomethingSomeoneSayToUs';
import TheThuthIs from './Lessons/Lesson_1/TheTruthIs/TheTruthIs';
import { urlConditional, urlEvenThough, urlProsAndCons, urlTroubles } from './Lessons/Lesson_2/topics_list';
import ProsAndCons from './Lessons/Lesson_2/ProsAndCons/ProsAndCons';
import Troubles from './Lessons/Lesson_2/Troubles/Troubles';
import Conditional from './Lessons/Lesson_2/Conditional/Conditional';
import EvenThough from './Lessons/Lesson_2/EvenThough/EvenThough';
import { urlLooksLike, urlNegativeAnswer } from './Lessons/Lesson_3/topics_list';
import LooksLike from './Lessons/Lesson_3/LooksLike/LooksLike';
import NegativeAnswer from './Lessons/Lesson_3/NegativeAnswer/NegativeAnswer';
import { urlDoSomeFavor, urlSomeoneDoesSomethingForUs } from './Lessons/Lesson_4/topics_list';
import DoesSomethingForSomeone from './Lessons/Lesson_4/DoesSomethingForSomeone/DoesSomethingForSomeone';
import DoSomeFavor from './Lessons/Lesson_4/DoSomeFavor/DoSomeFavor';
import LessonOne from './Lessons/Lesson_1/LessonOne';
import LessonTwo from './Lessons/Lesson_2/LessonTwo';
import LessonTree from './Lessons/Lesson_3/LessonTree';
import LessonFour from './Lessons/Lesson_4/LessonFour';
import LessonFive from './Lessons/Lesson_5/LessonFive';
import LandingPage from './LandingPage';
import { urlBolitiveForm, urlSomethingLooksLike, urlStriveForSomething } from './Lessons/Lesson_5/topics_list';
import BolitiveForm from './Lessons/Lesson_5/BolitiveForm/BolitiveForm';
import SomethingLooksLike from './Lessons/Lesson_5/SomethingLooksLike/SomethingLooksLike';
import StriveForSomething from './Lessons/Lesson_5/StriveForSomething/StriveForSomething';
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
                <Route exact path='/lesson1' component={LessonOne} />
                <Route exact path={urlDesitionReasons} component={DesitionReasons} />
                <Route exact path={urlSaySomethingSomeoneSaysToUs} component={SaySomethingSomeoneSaysToUs} />
                <Route exact path={urlSustantivateAdjectives} component={SustantivateAdjective} />
                <Route exact path={urlTheTruthIs} component={TheThuthIs} />
                <Route exact path={urlThingsWeHaveToDo} component={DesitionReasons} />
                <Route exact path='/lesson2' component={LessonTwo} />
                <Route exact path={urlConditional} component={Conditional} />
                <Route exact path={urlEvenThough} component={EvenThough} />
                <Route exact path={urlTroubles} component={Troubles} />
                <Route exact path={urlProsAndCons} component={ProsAndCons} />
                <Route exact path='/lesson3' component={LessonTree} />
                <Route exact path={urlLooksLike} component={LooksLike} />
                <Route exact path={urlNegativeAnswer} component={NegativeAnswer} />
                <Route exact path='/lesson4' component={LessonFour} />
                <Route exact path={urlSomeoneDoesSomethingForUs} component={DoesSomethingForSomeone} />
                <Route exact path={urlDoSomeFavor} component={DoSomeFavor} />
                <Route exact path='/lesson5' component={LessonFive} />
                <Route exact path={urlBolitiveForm} component={BolitiveForm} />
                <Route exact path={urlSomethingLooksLike} component={SomethingLooksLike} />
                <Route exact path={urlStriveForSomething} component={StriveForSomething} />
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
