import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameExpressFeelings } from '../topics_list';

export default function ExpressFeeling() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameExpressFeelings} grammar={Grammar} description={description} />
}
