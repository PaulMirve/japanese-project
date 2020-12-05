import Topic from "../../../models/Topic";
export const urlDesitionReasons = '/desition-reasons';
export const nameDesitionReasons = 'Dar razones de una desición';
export const urlImperativeForm = '/imperative-form';
export const nameImperativeForm = 'Forma imperativa';
export const urlSustantivateAdjectives = '/sustantivate-adjectivas';
export const nameSustantivateAdjectives = 'Sustantivar adjetivos';
export const urlSaySomethingSomeoneSaysToUs = '/say-something-someone-says-to-us';
export const nameSaySomethingSomeoneSaysToUs  = 'Expresar algo que nos dijo alguien'
export const urlTheTruthIs = '/the-truth-is';
export const nameTheTruthIs = 'La verdad es que...';
export const urlThingsWeHaveToDo = '/things-we-have-to-do';
export const nameThingsWeHaveToDo = 'Cosas que tenemos que hacer';

const topics = [
    new Topic(nameImperativeForm, urlImperativeForm),
    new Topic(nameDesitionReasons, urlDesitionReasons),
    new Topic(nameSustantivateAdjectives, urlSustantivateAdjectives),
    new Topic(nameSaySomethingSomeoneSaysToUs, urlSaySomethingSomeoneSaysToUs),
    new Topic(nameTheTruthIs, urlTheTruthIs),
    new Topic(nameThingsWeHaveToDo, urlThingsWeHaveToDo)
];
export default topics;