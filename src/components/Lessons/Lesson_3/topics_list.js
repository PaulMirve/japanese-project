import Topic from "../../../models/Topic";
export const urlLooksLike = '/looks-like';
export const nameLooksLike = 'Semejanzas';
export const urlNegativeAnswer = '/negative-answer';
export const nameNegativeAnswer = 'Preguntas negativas';

const topics = [
    new Topic(nameLooksLike, urlLooksLike),
    new Topic(nameNegativeAnswer, urlNegativeAnswer)
];
export default topics;