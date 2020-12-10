import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
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
import Navbar from './CustomComponents/Navbar';
import Footer from './CustomComponents/Footer';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(10, 4, 60, 4)
        },
        padding: theme.spacing(10, 4, 40, 4)
    }
}));

export default function App() {
    const classes = useStyle();
    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <Route exact path='/' component={LandingPage} />
                {routes.map((route, index) => {
                    return <Route key={index} exact path={route.route} component={route.component} />
                })}
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
            <Footer />
        </>
    )
}
