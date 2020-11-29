import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import { nameTransitiveVerbs } from '../topics_list';

export default function TransitiveVerbs() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameTransitiveVerbs} grammar={Grammar} description={description} />
}
