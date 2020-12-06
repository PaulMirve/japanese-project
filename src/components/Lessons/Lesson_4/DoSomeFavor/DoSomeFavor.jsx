import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import { nameDoSomeFavor } from '../topics_list';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import examples from './examples';

export default function DoSomeFavor() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>
                        Persona que hace la acción + が + Persona que recibe la acción + に +  Verbo en forma て + くれました
                    </GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Indicar que alguien hace algo por nosotros. Cuando usamos esta forma la persona que hace la acción es la que toma importancia.';
    return <Topic name={nameDoSomeFavor} grammar={Grammar} description={description} examples={examples} />
}
