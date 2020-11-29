import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameLooksLike } from '../topics_list';

export default function LooksLike() {
    const Grammar = () => {
        return <></>
    }

    const description = '';
    return <Topic name={nameLooksLike} grammar={Grammar} description={description} />
}
