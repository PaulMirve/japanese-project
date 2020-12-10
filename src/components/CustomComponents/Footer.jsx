import { Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyle = makeStyles(theme => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        [theme.breakpoints.down('md')]: {
            height: '20rem',
        },
        height: '10rem',
        backgroundColor: '#003459',
        padding: theme.spacing(3, 0),
        color: 'white',
    },
    container: {
        padding: theme.spacing(0, 6)
    },
    icon: {
        fontSize: '5vh',
        margin: 5
    },
    contributors: {
        textAlign: 'center',
        fontWeight: 300
    },
    iconsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]:{
            padding: theme.spacing(1, 10, 1, 10),
        },
        padding: theme.spacing(5, 30, 5, 30),
        fontSize: '5vh'
    }
}));

export default function Footer() {
    const classes = useStyle();
    return (
        <footer className={classes.footer}>
            <Grid container className={classes.container}>
                <Grid item xs={12} md={6}>
                    <Typography align='center'>El código de la página puede ser encontrado en el siguiente <Link underline='always' color='inherit' href='https://github.com/PaulMirve/japanese-project'>enlace</Link></Typography>
                    <div className={classes.contributors}>
                        Código del página hecho por Paul Miranda
                    </div>
                    {/* <div className={classes.iconsContainer}>
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography align='center'>Información reunida por:</Typography>
                    <div className={classes.contributors}>
                        <p>Nahomi Baez</p>
                        <p>Alejandro Aldrete</p>
                        <p>Yureni Montijo</p>
                        <p>Laura Bravo</p>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}
