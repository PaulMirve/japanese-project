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

export default function App() {
    return (
        <>
            <Navbar />
            <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10 }}>
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
        </>
    )
}
