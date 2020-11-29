import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import { nameDoSomethingForSomeone } from '../topics_list';

export default function DoSomethingForSomeone() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameDoSomethingForSomeone} grammar={Grammar} description={description} />
}
