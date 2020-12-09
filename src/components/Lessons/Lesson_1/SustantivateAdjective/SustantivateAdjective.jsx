import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameSustantivateAdjectives } from '../topics_list';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import AdjectivesBoxes from '../../../CustomComponents/AdjectivesBoxes';
import examples from './examples';

export default function SustantivateAdjective() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>En caso de ser un adejtivo い se remueve la い y se agrega さ al final. Para adejtivos な se remueve la な y se agrega さ. Para verbos se quita el ます.</p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Adejtivo い　+ さ</GrammarLesson>
                    <GrammarLesson>Adejtivo な　+ さ</GrammarLesson>
                    <GrammarLesson>Verbo　+ <strike>ます</strike></GrammarLesson>
                </div>
                <AdjectivesBoxes IAdjectives={examples.iAdjectives} NaAdjectives={examples.naAdjectives} verbs={examples.verbs} />
            </>
        );
    }

    const description = 'Pra convertir sustantivos y verbos a sustantivo utilizamos esta forma.';
    return <Topic name={nameSustantivateAdjectives} grammar={Grammar} description={description} />
}
