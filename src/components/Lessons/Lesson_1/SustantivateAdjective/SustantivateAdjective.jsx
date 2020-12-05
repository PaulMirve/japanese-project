import React from 'react';
import Topic from '../../../CustomComponents/Topic';
import { nameSustantivateAdjectives } from '../topics_list';

export default function SustantivateAdjective() {
    const Grammar = () => {
        return null;
    }

    const description = 'Se utiliza para sustantivar un adejtivo. Por ejemplo, si tenemos el adjetivo';
    return <Topic name={nameSustantivateAdjectives} grammar={Grammar} description={description} />
}
