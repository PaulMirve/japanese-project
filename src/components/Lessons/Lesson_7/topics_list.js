import Topic from '../../../models/Topic';
export const nameNotBeSureOfSomething = 'Expresar la posibilidad de que algo suceda';
export const urlNotBeSureOfSomething = '/not-be-sure-of-something';
export const nameDifferingResults = 'Expresar que algo no es como esperabamos';
export const urlDifferingResults = '/differing-results';
export const nameExpressFeelings = 'Expresar como nos sentimos';
export const urlExpressFeelings = '/express-feelings';
export const nameWishSomeoneToDoSomething = 'Querer algo';
export const urlWishSomeoneToDoSomething = '/wish-someone-to-do-something';

const topics = [
    new Topic(nameNotBeSureOfSomething, urlNotBeSureOfSomething),
    new Topic(nameDifferingResults, urlDifferingResults),
    new Topic(nameExpressFeelings, urlExpressFeelings),
    new Topic(nameWishSomeoneToDoSomething, urlWishSomeoneToDoSomething)
];
export default topics;