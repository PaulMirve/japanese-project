import React, { useEffect } from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import Topic from '../../../CustomComponents/Topic';
import { Grid } from '@material-ui/core';
import VerbsCard from '../../../CustomComponents/VerbsCard';
import { positiveVerbs, negativeVerbs } from './imperative_form_verbs';

export default function ImperativeForm() {
    const classes = useLessonStyle();

    useEffect(() => {
        document.title = 'Forma Imperativa';
    });

    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Para verbos del grupo 1 la vocal /i/ de la forma-MASU se cambia por /e/. Verbos del grupo 2 se elimina -ます y se añade ろ. Se elimina -ます y se añade ろ. El verbo きます se convierte en こい.</p>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 1' verbs={positiveVerbs.groupOne} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 2' verbs={positiveVerbs.groupTwo} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 3' verbs={positiveVerbs.groupTree} />
                    </Grid>
                </Grid>
                <p className={classes.description}>Para la forma negativa se le agrega la silaba NA a la forma diccionario.</p>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 1' verbs={negativeVerbs.groupOne} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 2' verbs={negativeVerbs.groupTwo} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VerbsCard title='Verbos del Grupo 3' verbs={negativeVerbs.groupTree} />
                    </Grid>
                </Grid>
            </>
        );
    }

    const descriptiton = 'Para verbos del grupo 1 la vocal /i/ de la forma-MASU se cambia por /e/. Verbos del grupo 2 se elimina -ます y se añade ろ. Se elimina -ます y se añade ろ. El verbo きます se convierte en こい.';
    return <Topic name='Forma  Imperativa' grammar={Grammar} description={descriptiton} />;
}
