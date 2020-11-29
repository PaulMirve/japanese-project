import Topic from '../../../models/Topic';
export const nameDoSomethingForSomeone = 'Hacer algo por alguien';
export const urlDoSomethingForSomeone = '/do-something-for-someone';
export const nameConfirm = 'Confirmar algo que oimos';
export const urlConfirm = '/confirm';
export const nameThingsWeThinkWillDoInTheFuture = 'Cosas que penseamos que haremos en el futuro';
export const urlThingsWeThinkWillDOInTheFuture = '/thigs-think-future'

const topics = [
    new Topic(nameDoSomethingForSomeone, urlDoSomethingForSomeone),
    new Topic(nameConfirm, urlConfirm),
    new Topic(nameThingsWeThinkWillDoInTheFuture, urlThingsWeThinkWillDOInTheFuture)
];
export default topics;