import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
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
            </div>
            <Footer />
        </>
    )
}
