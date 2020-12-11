import { Link } from '@material-ui/core';
import React from 'react';
import history from '../../../../history';
import Topic from '../../../CustomComponents/Topic';
import useLessonStyles from '../../../CustomHooks/lesson_styles';
import { nameAskingForHelp } from '../topics_list';
import examples from './examples';

export default function AskingForHelp() {
    const classes = useLessonStyles();
    const Grammar = () => {
        return (
            <>
                <p className={classes.description}>Se emplea la forma て o la <Link color='inherit' underline='always' onClick={() => history.push('/imperative-form')}>forma imperativa</Link> del verbo.</p>
            </>
        );
    }
    const description = 'Estas son expresiones que se usan cuando, ante algún problema, queremos pedir ayuda o gritamos para avisar rápidamente a alguien. ';
    return <Topic name={nameAskingForHelp} grammar={Grammar} description={description} examples={examples} />
}
