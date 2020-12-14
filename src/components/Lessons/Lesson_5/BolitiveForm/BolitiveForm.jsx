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
                <p className={classes.description}>Para convertir un verbo en forma volitiva se toman los siguientes puntos: Para verbos del grupo 1 la sílaba antes del ます se cambia por su forma en /o/ y se le agrega la partícula う. Para verbos del grupo 2 se
                elimina ます y se añade よう. Para verbos del grupo 3 します se convierte en しよう y きます se convierte en こよう.</p>
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
    const description = 'La forma volitiva nos sirve para expresar las cosas que tenemos pensadas hacer en un futuro.';
    return <Topic name={nameBolitiveForm} grammar={Grammar} description={description} examples={examples} />
}
