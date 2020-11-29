import Topic from '../../../models/Topic';
export const nameDoSomethingWhileDoOtherThing = 'Hacer algo mientras hacemos otra cosa';
export const urlDoSomethingWhileDoOtherThing = '/do-something-while-do-other-thing';
export const nameRememberWhatYouWhereDoing = 'Recordar cosas que hiciste';
export const urlRememberWhatYouWhereDoing = '/remember-what-you-where-doing';
export const nameTransitiveVerbs = 'Verbos transitivos';
export const urlTransitiveVerbs = '/transitive-verbs';

const topics = [
    new Topic(nameDoSomethingWhileDoOtherThing, urlDoSomethingWhileDoOtherThing),
    new Topic(nameRememberWhatYouWhereDoing, urlRememberWhatYouWhereDoing),
    new Topic(nameTransitiveVerbs, urlTransitiveVerbs)
];
export default topics;