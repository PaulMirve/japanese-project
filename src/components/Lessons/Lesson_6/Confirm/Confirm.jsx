import React from 'react'
import Topic from '../../../CustomComponents/Topic';
import { nameConfirm } from '../topics_list';

export default function Confirm() {
    const Grammar = () => {
        return <></>
    }
    const description = '';
    return <Topic name={nameConfirm} grammar={Grammar} description={description} />
}
