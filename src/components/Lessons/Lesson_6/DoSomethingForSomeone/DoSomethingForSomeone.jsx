import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameDoSomethingForSomeone } from '../topics_list';
import examples from './examples';

export default function DoSomethingForSomeone() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>

                <div className={classes.grammarContainer}>
                    <GrammarLesson> Verbo en forma て ＋ あげます</GrammarLesson>
                </div>
                <p className={classes.description}>
                    Se pueden utilizar derivaciones para indicar se utiliza para indicar el deseo de ayudar:
                 </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson> forma て ＋ あげたいです</GrammarLesson>
                </div>
                <p className={classes.description}>
                    O para indicar que se piensa en hacer algo por alguien mas.
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson> forma て　＋　あげようと思っています</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Esta forma se suele utilizar cuando el beneficiario no está presente, al tener la connotación de que se hace sin tener en cuenta la opinión o los deseos de este. Además, se usa solo para referirse a la familia, amigos íntimos de la misma edad y compañeros de estudio o trabajo más jóvenes o que llevan menos tiempo en la institución.';
    return <Topic name={nameDoSomethingForSomeone} grammar={Grammar} description={description} examples={examples} />
}
