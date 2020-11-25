import React, { useEffect } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core';
import history from '../history';
import imagen from '../static/img/study_school_jugyou_man.png';

const useStyles = makeStyles(theme => ({
    imgContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        fontWeight: 300,
        margin: 5
    }
}));

const CustomButton = ({ children, color, onClick }) => {
    const classes = useStyles();
    return <Button
        className={classes.btn}
        onClick={onClick}
        variant='outlined'
        fullWidth
        size='large'>{children}</Button>
}

export default function LandingPage() {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Sexto Nivel';
    });
    return (
        <Grid container>
            <Grid item xs={4}>
                <div>
                    <CustomButton onClick={() => history.push('/lesson1')} color='green'>Lección 1</CustomButton>
                    <CustomButton color='red'>Lección 2</CustomButton>
                    <CustomButton color='blue'>Lección 3</CustomButton>
                    <CustomButton color='yellow'>Lección 4</CustomButton>
                    <CustomButton color='brown'>Lección 5</CustomButton>
                    <CustomButton color='gray'>Lección 6</CustomButton>
                    <CustomButton color='pink'>Lección 7</CustomButton>
                    <CustomButton color='purple'>Lección 8</CustomButton>
                </div>

            </Grid>
            <Grid item xs={8} className={classes.imgContainer}>
                <img alt='studying' src={imagen} />
            </Grid>
        </Grid>
    )
}
