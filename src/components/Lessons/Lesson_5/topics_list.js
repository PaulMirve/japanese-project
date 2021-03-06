import Topic from "../../../models/Topic";
export const nameBolitiveForm = 'Forma volitiva';
export const urlBolitiveForm = '/bolitive-form';
export const nameSomethingLooksLike = "Parece que...";
export const urlSomethingLooksLike = '/something-looks-like';
export const nameStriveForSomething = 'Esforzarse por algo';
export const urlStriveForSomething = '/strive-for-something';

const topics = [
    new Topic(nameBolitiveForm, urlBolitiveForm),
    new Topic(nameSomethingLooksLike, urlSomethingLooksLike),
    new Topic(nameStriveForSomething, urlStriveForSomething),
];
export default topics;