import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameSomeoneDoesSomethingForUs } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import examples from './examples';

export default function DoesSomethingForSomeone() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Persona que recibe el favor + は + Persona que hace el favor + に + Verbo en forma て + もらいました
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Esta forma sirve para expresar una acción que alguien ha hecho por nosotros o un favor que hemos recibido. Cuando usamos esta forma el sujeto es el que tiene la importancia.';
    return <Topic name={nameSomeoneDoesSomethingForUs} grammar={Grammar} description={description} examples={examples} />
}
