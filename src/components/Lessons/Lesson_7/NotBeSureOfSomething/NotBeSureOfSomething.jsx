import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import { nameNotBeSureOfSomething } from '../topics_list';

export default function NotBeSureOfSomething() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameNotBeSureOfSomething} grammar={Grammar} description={description} />
}
