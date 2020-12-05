import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameTheTruthIs } from '../topics_list';
import examples from './examples';

export default function TheTruthIs() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Se agrega じつは al prinicipio de la oracion.</p>
            </>
        )
    }
    const description = 'Nos sirve para iniciar una oración con una opinión que queremos expresar o enfatizar una acción.';
    return <Topic name={nameTheTruthIs} grammar={Grammar} description={description} examples={examples} />
}
