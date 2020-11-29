import Topic from "../../../models/Topic";
export const urlSomeoneDoesSomethingForUs = '/someone-does-something-for-us';
export const nameSomeoneDoesSomethingForUs = 'Alguien hace algo por nosotros';
export const urlDoSomeFavor = '/do-some-favor';
export const nameDoSomeFavor = 'Que alguien haga algo por mi';

const topics = [
    new Topic(nameSomeoneDoesSomethingForUs, urlSomeoneDoesSomethingForUs),
    new Topic(nameDoSomeFavor, urlDoSomeFavor)
];
export default topics;