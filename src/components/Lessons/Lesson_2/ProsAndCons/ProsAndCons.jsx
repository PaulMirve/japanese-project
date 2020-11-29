import React from 'react';
import useLessonStyle from '../../../CustomHooks/lesson_styles';
import { Divider, Typography } from '@material-ui/core';
import examples from './pros_and_cons_examples';
import Example from '../../../CustomComponents/Example';
import Topic from '../../../CustomComponents/Topic';
import { nameProsAndCons } from '../topics_list';

export default function ProsAndCons() {
    const classes = useLessonStyle();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <Typography align='center' className={classes.description}>Desventajas de la situación + けど + Ventajas de la situación + から ＋ Resultado de la situación </Typography>
                </div>
                <p className={classes.subtitle}>Ejemplos</p>
                <Divider />
                {examples.map((example, index) => {
                    return <Example example={example.example} translation={example.translation} key={index} />
                })}
            </>
        );
    }
    const description = 'Podemos manifestar las ventajas y las desventajas de algo.';
    return <Topic name={nameProsAndCons} grammar={Grammar} description={description} />

}
