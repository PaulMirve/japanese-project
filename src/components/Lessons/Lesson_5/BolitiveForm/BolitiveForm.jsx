import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameBolitiveForm } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import VerbsBoxes from '../../../CustomComponents/VerbsBoxes';
import verbs from './verbs';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import examples from './examples';

export default function BolitiveForm() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Para convertir un verbo en forma bolitiva se toman los siguientes puntos: Para verbos del grupo 1 la silaba antes del ます se cambia por su forma en /o/ y se le agrega la particula う. Para verbos del grupo 2 se elimina ます y se añade よう. Para verbos del grupo 3 se elimina ます y se añade よう. El verbo きます se convierte en こよう.</p>
                <VerbsBoxes verbs={verbs} />
                <p className={classes.description}>Para expresar algo que queremos hacer en el futuro se utiliza la siguiente forma gramátical:</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Verbo en forma volitiva + と思っています
                    </GrammarLesson>
                </div>
            </>
        );
    };
    const description = 'La forma bolitiva nos sirve para expresar las cosas que tenemos pensadas hacer en un futuro.';
    return <Topic name={nameBolitiveForm} grammar={Grammar} description={description} examples={examples} />
}
