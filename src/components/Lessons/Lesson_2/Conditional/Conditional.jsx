import { Grid } from '@material-ui/core';
import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import VerbsCard from '../../../CustomComponents/VerbsCard';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameConditionalForm } from '../topics_list';
import verbs from './verbs';
import examples from './examples';

export default function Conditional() {
    const grammar = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={grammar.description}>Para verbos del grupo 1 se cambia la ultima sílaba antes del ます por su forma /e/. Para verbos del grupo 2 se cambia el masu por れば。Los verbos del grupo 3 se utiliza できれば　y すれば。</p>
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
            </>
        );
    }
    const description = 'Esta forma nos sirve para mencionar cosas que pasarán si se cumple una condición.';
    return <Topic name={nameConditionalForm} grammar={Grammar} description={description} examples={examples} />
}
