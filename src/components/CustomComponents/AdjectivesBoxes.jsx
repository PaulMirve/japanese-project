import { Grid } from '@material-ui/core';
import React from 'react';
import VerbsCard from './VerbsCard';

export default function AdjectivesBoxes({ IAdjectives, NaAdjectives, verbs }) {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={verbs ? 4 : 6}>
                <VerbsCard title='Adjetivos  い' verbs={IAdjectives} />
            </Grid>
            <Grid item xs={12} md={verbs ? 4 : 6}>
                <VerbsCard title='Adjetivos  な' verbs={NaAdjectives} />
            </Grid>
            {verbs ?
                <Grid item xs={12} md={4}>
                    <VerbsCard title='Verbos' verbs={verbs} />
                </Grid> : null
            }
        </Grid>
    )
}
