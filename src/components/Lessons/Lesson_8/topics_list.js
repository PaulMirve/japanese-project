import Topic from '../../../models/Topic';
export const nameDoSomethingWhileDoOtherThing = 'Hacer algo mientras hacemos otra cosa';
export const urlDoSomethingWhileDoOtherThing = '/do-something-while-do-other-thing';
export const nameRememberWhatYouWhereDoing = 'Recordar cosas que hiciste';
export const urlRememberWhatYouWhereDoing = '/remember-what-you-where-doing';
export const nameTransitiveVerbs = 'Verbos Transitivos';
export const urlTransitiveVerbs = '/transitive-verbs';
export const nameIntransitiveVerbs = 'Verbos Intransitivos';
export const urlIntransitiveVerbs = '/intransitive-verbs';
export const nameAskingForHelp = 'Pedir ayuda';
export const urlAskingForHelp = '/asking-for-help';

const topics = [
    new Topic(nameDoSomethingWhileDoOtherThing, urlDoSomethingWhileDoOtherThing),
    new Topic(nameRememberWhatYouWhereDoing, urlRememberWhatYouWhereDoing),
    new Topic(nameTransitiveVerbs, urlTransitiveVerbs),
    new Topic(nameIntransitiveVerbs, urlIntransitiveVerbs),
    new Topic(nameAskingForHelp, urlAskingForHelp),
];
export default topics;