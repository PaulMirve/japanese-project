
import { Typography } from '@material-ui/core';
import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameEvenThough } from '../topics_list';
import examples from './examples';

export default function EvenThough() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <div className={classes.grammarContainer}>
                    <Typography align='center' className={classes.description}>Adejtivo いーく　＋　ても/なくても</Typography>
                    <Typography align='center' className={classes.description}>Adejtivo な　＋　でも/じゃなくても</Typography>
                </div>
            </>
        )
    }
    const description = 'Podemos usar esta forma para contrastar una cosa buena con una cosa mala.';
    return <Topic name={nameEvenThough} grammar={Grammar} description={description} examples={examples} />
}
