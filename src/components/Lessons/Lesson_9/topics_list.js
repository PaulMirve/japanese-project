import Topic from "../../../models/Topic";
export const nameThingsWeWantToDoInTheFuture = 'Cosas que queremos hacer en el futuro';
export const urlThingsWeWantToDoInTheFuture = '/thigs-we-want-to-do-in-the-future';
export const nameThingsWeAreCapableOf = 'Cosas de las que somos capaces';
export const urlThingsWeAreCapableOf = '/thigs-we-are-capable-of';
export const nameCompareActions = 'Comparar acciones';
export const urlCompareActions = '/compare-actions';

const topics = [
    new Topic(nameThingsWeWantToDoInTheFuture, urlThingsWeWantToDoInTheFuture),
    new Topic(nameThingsWeAreCapableOf, urlThingsWeAreCapableOf),
    new Topic(nameCompareActions, urlCompareActions),
];
export default topics;