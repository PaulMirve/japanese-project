import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameNegativeAnswer } from '../topics_list';

export default function NegativeAnswer() {
    const Grammar = () => {
        return <></>;
    }
    const descripcion = '';
    return <Topic name={nameNegativeAnswer} grammar={Grammar} description={descripcion} />
}
