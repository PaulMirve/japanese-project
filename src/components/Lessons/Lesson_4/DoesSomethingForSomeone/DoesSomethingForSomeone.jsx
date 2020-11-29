import React from 'react'
import Topic from '../../../CustomComponents/Topic'
import { nameSomeoneDoesSomethingForUs } from '../topics_list';

export default function DoesSomethingForSomeone() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameSomeoneDoesSomethingForUs} grammar={Grammar} description={description} />
}
