import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameSomethingLooksLike } from '../topics_list';

export default function SomethingLooksLike() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameSomethingLooksLike} grammar={Grammar} description={description} />
}
