import React from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Typography } from '@material-ui/core';
import examples from './troubles_examples'
import Topic from '../../../CustomComponents/Topic';

export default function Troubles() {
    const classes = useLessonStyle();

    const Grammar = () => {
        return (
            <div className={classes.grammarContainer}>
                <Typography align='center' className={classes.description}>Oración + Verbo en forma diccionario + んですけど</Typography>
            </div>
        );
    }

    const description = 'Podemos señalar que tenemos problemas con algo o que algo no nos agrado usando けど al final de una oración.';;
    return <Topic name='Transmitir algún poblema' grammar={Grammar} description={description} examples={examples} />
}
