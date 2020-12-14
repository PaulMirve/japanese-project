import React from 'react'
import GrammarLesson from '../../../CustomComponents/GrammarLesson';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameRememberWhatYouWhereDoing } from '../topics_list';
import examples from './examples';

export default function RememberWhatYouWhereDoing() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>
                    A veces hablamos solos cuando intentamos recordar algo que hemos hecho, para hacer esto usamos la siguiente formula:
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma て + から、 + Verbo 2</GrammarLesson>
                </div>
                <p className={classes.description}>
                    Cuando queremos recordar en voz alta algo que hemos hecho mencionando el punto de inicio, o bien queremos recorrer con la memoria una secuencia de acciones en el orden adecuado, o incluso deseamos repasar cronológicamente las cosas que hemos ido
                    haciendo utilizamos la siguiente formula:
                </p>
                <div className={classes.grammarContainer}>
                    <GrammarLesson>Verbo en forma diccionario pasado + あとで、 Verbo 2</GrammarLesson>
                </div>
            </>
        );
    }
    const description = 'Se trata de diferenciar el uso del estilo formal y el estilo informal. En esta lección, distinguimos entre el estilo informal, que utilizamos cuando nos decimos a nosotros mismos lo que pensamos o sentimos en' +
        ' lugar de a otras personas, y el estilo formal, que usamos cuando nos dirigimos a alguien';
    return <Topic name={nameRememberWhatYouWhereDoing} grammar={Grammar} description={description} examples={examples} />
}
