import { AppBar, Button, makeStyles, Toolbar, Typography, Link, Hidden, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react';
import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AppBar style={{ background: '#003459' }} position='static'>
            <Toolbar>
                <div className={classes.grow}>
                    <Typography className={classes.navTitle}>
                        <Link color='inherit' underline='none' onClick={() => history.push('/')} >Sexto Nivel</Link>
                    </Typography>
                </div>
                <Hidden mdDown>
                    <div className={classes.sectionDesktop}>
                        {urls.map((url, index) => {
                            return <Button key={index} onClick={() => history.push(url.url)} className={classes.navButton} color="inherit">{url.name}</Button>
                        })}
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(true)} />
                    <Drawer open={isOpen} anchor='top' onClose={() => setIsOpen(false)}>
                        <List>
                            {urls.map((url, index) => {
                                return (
                                    <ListItem key={index} >
                                        <ListItemText primary={url.name} onClick={() => {
                                            history.push(url.url);
                                            setIsOpen(false);
                                        }} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
