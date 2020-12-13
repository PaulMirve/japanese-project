import React from 'react';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameIndirectInformation } from '../topics_list';
import examples from './examples';


export default function IndirectInformation() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma diccionario + そうです / Verbo en forma diccionario + って言っていました</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Este tipo de expresión se utiliza para transmitir una información obtenida de forma indirecta, ya sea por haberla visto a través de algún medio visual, por haberla leído en algún sitio o por haberla escuchado de alguien.'
    return <Topic name={nameIndirectInformation} grammar={Grammar} description={description} examples={examples} />
}
