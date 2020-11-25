import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 20,
        fontWeight: 100,
        textAlign: 'center'
    },
    border: {
        border: '1px solid black',
        borderRadius: 10,
        padding: 10
    },
    list: {
        display: 'table',
        margin: '0 auto'
    },
    listElement: {
        marginTop: 10
    }
}));

export default function VerbsCard({ title, verbs = [] }) {
    const classes = useStyles();
    return (
        <div className={classes.border}>
            <p className={classes.title}>{title}</p>
            <Divider />
            <div style={{ margin: 10 }}>
                <ul className={classes.list}>
                    {verbs.map((verb, index) => {
                        return (
                            <li key={index} className={classes.listElement}>{verb}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
