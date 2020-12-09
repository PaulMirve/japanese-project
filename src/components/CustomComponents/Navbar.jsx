import { AppBar, Button, makeStyles, Toolbar, Typography, Link } from '@material-ui/core'
import React from 'react';
import history from '../../history';

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

const urls = [
    { name: 'Lección 1', url: '/lesson1' },
    { name: 'Lección 2', url: '/lesson2' },
    { name: 'Lección 3', url: '/lesson3' },
    { name: 'Lección 4', url: '/lesson4' },
    { name: 'Lección 5', url: '/lesson5' },
    { name: 'Lección 6', url: '/lesson6' },
    { name: 'Lección 7', url: '/lesson7' },
    { name: 'Lección 8', url: '/lesson8' },
    { name: 'Lección 9', url: '/lesson9' },
];

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar style={{ background: '#003459' }} position='static'>
            <Toolbar>
                <div className={classes.grow}>
                    <Typography className={classes.navTitle}>
                        <Link color='inherit' underline='none' onClick={() => history.push('/')} >Sexto Nivel</Link>
                    </Typography>
                </div>
                <div className={classes.sectionDesktop}>
                    {urls.map((url, index) => {
                        return <Button key={index} onClick={() => history.push(url.url)} className={classes.navButton} color="inherit">{url.name}</Button>
                    })}
                </div>
            </Toolbar>
        </AppBar>
    )
}
