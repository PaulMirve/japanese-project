import React from 'react'
import { Grid } from '@material-ui/core';
import VerbsCard from './VerbsCard';

export default function VerbsBoxes({ verbs }) {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
                <VerbsCard title='Verbos del Grupo 1' verbs={verbs.groupOne} />
            </Grid>
            <Grid item xs={12} md={4}>
                <VerbsCard title='Verbos del Grupo 2' verbs={verbs.groupTwo} />
            </Grid>
            <Grid item xs={12} md={4}>
                <VerbsCard title='Verbos del Grupo 3' verbs={verbs.groupTree} />
            </Grid>
        </Grid>
    )
}
