import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    arrowIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    container: {
        marginTop: 10
    },
    highlight: {
        color: 'red',
        fontWeight: '800'
    }
}));

export default function Example({ example, translation, audio }) {
    const classes = useStyles();
    const { first, highlight, second, secondHighlight, third } = example;
    return (
        <Grid className={classes.container} container>
            <Grid item xs={11}>
                <div style={{ display: 'flex' }}>
                    <Typography>{first}</Typography>
                    <Typography className={classes.highlight}>{highlight}</Typography>
                    {second}
                    <Typography className={classes.highlight}>{secondHighlight}</Typography>
                    {third}
                    <FontAwesomeIcon className={classes.arrowIcon} icon={faArrowRight} />
                    {translation}
                </div>
            </Grid>
            <Grid item xs={1}>
                <FontAwesomeIcon icon={faVolumeUp} />
            </Grid>
        </Grid>
    )
}
