import Topic from "../../../models/Topic";
export const urlConditional = '/conditional-form';
export const nameConditionalForm = 'Forma Condicional';
export const urlEvenThough = '/even-though';
export const nameEvenThough = 'Contrastar cosas';
export const urlProsAndCons = '/pros-and-cons';
export const nameProsAndCons = 'Expresar ventajas y desventajas de algo';
export const urlTroubles = '/troubles';
export const nameTroubles = 'Transmitir algo con lo que tenemos problemas';

const topics = [
    new Topic(nameConditionalForm, urlConditional),
    new Topic(nameEvenThough, urlEvenThough),
    new Topic(nameTroubles, urlTroubles),
    new Topic(nameProsAndCons, urlProsAndCons)
];

export default topics;