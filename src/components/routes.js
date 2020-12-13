import DesitionReasons from "./Lessons/Lesson_1/DesitionReasons/DesitionReasons";
import ImperativeForm from "./Lessons/Lesson_1/ImperativeForm/ImperativeForm";
import LessonOne from "./Lessons/Lesson_1/LessonOne";
import SaySomethingSomeoneSayToUs from "./Lessons/Lesson_1/SaySomethingSomeoneSaysToUs/SaySomethingSomeoneSayToUs";
import SustantivateAdjective from "./Lessons/Lesson_1/SustantivateAdjective/SustantivateAdjective";
import TheTruthIs from "./Lessons/Lesson_1/TheTruthIs/TheTruthIs";
import ThingsWeHaveToDo from "./Lessons/Lesson_1/ThingsWeHaveToDo/ThingsWeHaveToDo";
import { urlDesitionReasons, urlImperativeForm, urlSaySomethingSomeoneSaysToUs, urlSustantivateAdjectives, urlTheTruthIs, urlThingsWeHaveToDo } from "./Lessons/Lesson_1/topics_list";
import Conditional from "./Lessons/Lesson_2/Conditional/Conditional";
import EvenThough from "./Lessons/Lesson_2/EvenThough/EvenThough";
import LessonTwo from './Lessons/Lesson_2/LessonTwo';
import ProsAndCons from "./Lessons/Lesson_2/ProsAndCons/ProsAndCons";
import { urlConditional, urlEvenThough, urlProsAndCons, urlTroubles } from "./Lessons/Lesson_2/topics_list";
import Troubles from "./Lessons/Lesson_2/Troubles/Troubles";
import LessonTree from "./Lessons/Lesson_3/LessonTree";
import LooksLike from "./Lessons/Lesson_3/LooksLike/LooksLike";
import NegativeAnswer from "./Lessons/Lesson_3/NegativeAnswer/NegativeAnswer";
import { urlLooksLike, urlNegativeAnswer } from "./Lessons/Lesson_3/topics_list";
import DoesSomethingForSomeone from "./Lessons/Lesson_4/DoesSomethingForSomeone/DoesSomethingForSomeone";
import DoSomeFavor from "./Lessons/Lesson_4/DoSomeFavor/DoSomeFavor";
import LessonFour from "./Lessons/Lesson_4/LessonFour";
import { urlDoSomeFavor, urlSomeoneDoesSomethingForUs } from "./Lessons/Lesson_4/topics_list";
import BolitiveForm from "./Lessons/Lesson_5/BolitiveForm/BolitiveForm";
import LessonFive from "./Lessons/Lesson_5/LessonFive";
import SomethingLooksLike from "./Lessons/Lesson_5/SomethingLooksLike/SomethingLooksLike";
import StriveForSomething from "./Lessons/Lesson_5/StriveForSomething/StriveForSomething";
import { urlBolitiveForm, urlSomethingLooksLike, urlStriveForSomething } from "./Lessons/Lesson_5/topics_list";
import Confirm from "./Lessons/Lesson_6/Confirm/Confirm";
import DoSomethingForSomeone from "./Lessons/Lesson_6/DoSomethingForSomeone/DoSomethingForSomeone";
import LessonSix from "./Lessons/Lesson_6/LessonSix";
import ThingsWeThinkWillDoInTheFuture from "./Lessons/Lesson_6/ThingsWeThinkWillDoInTheFuture/ThingsWeThinkWillDoInTheFuture";
import { urlConfirm, urlDoSomethingForSomeone, urlThingsWeThinkWillDOInTheFuture } from "./Lessons/Lesson_6/topics_list";
import DifferingResults from "./Lessons/Lesson_7/DifferingResults/DifferingResults";
import ExpressFeeling from "./Lessons/Lesson_7/ExpressFeeling/ExpressFeeling";
import LessonSeven from "./Lessons/Lesson_7/LessonSeven";
import NotBeSureOfSomething from "./Lessons/Lesson_7/NotBeSureOfSomething/NotBeSureOfSomething";
import { urlDifferingResults, urlExpressFeelings, urlNotBeSureOfSomething, urlWishSomeoneToDoSomething } from "./Lessons/Lesson_7/topics_list";
import WishSomeoneToDoSomethting from "./Lessons/Lesson_7/WishSomeoneToDoSomething/WishSomeoneToDoSomethting";
import AskingForHelp from "./Lessons/Lesson_8/AskingForHelp/AskingForHelp";
import DoSomethingWhileDoOtherThing from "./Lessons/Lesson_8/DoSomethingWhileDoOtherThing/DoSomethingWhileDoOtherThing";
import IndirectInformation from "./Lessons/Lesson_8/IndirectInformation/IndirectInformation";
import IntransitiveVerbs from "./Lessons/Lesson_8/IntransitiveVerbs/IntransitiveVerbs";
import LessonEight from "./Lessons/Lesson_8/LessonEight";
import RememberWhatYouWhereDoing from "./Lessons/Lesson_8/RememberWhatYouWhereDoing/RememberWhatYouWhereDoing";
import { urlAskingForHelp, urlDoSomethingWhileDoOtherThing, urlIndirectInformation, urlIntransitiveVerbs, urlRememberWhatYouWhereDoing, urlTransitiveVerbs } from "./Lessons/Lesson_8/topics_list";
import TransitiveVerbs from "./Lessons/Lesson_8/TransitiveVerbs/TransitiveVerbs";
import CompareActions from "./Lessons/Lesson_9/CompareActions/CompareActions";
import LessonNine from "./Lessons/Lesson_9/LessonNine";
import ThingsWeAreCapableOf from "./Lessons/Lesson_9/ThingsWeAreCapableOf/ThingsWeAreCapableOf";
import ThingsWeWantToDoInTheFuture from "./Lessons/Lesson_9/ThingsWeWantToDoInTheFuture/ThingsWeWantToDoInTheFuture";
import { urlCompareActions, urlThingsWeAreCapableOf, urlThingsWeWantToDoInTheFuture } from "./Lessons/Lesson_9/topics_list";

const rutas = [
    { route: '/lesson1', component: LessonOne },
    { route: urlImperativeForm, component: ImperativeForm },
    { route: urlDesitionReasons, component: DesitionReasons },
    { route: urlSaySomethingSomeoneSaysToUs, component: SaySomethingSomeoneSayToUs },
    { route: urlSustantivateAdjectives, component: SustantivateAdjective },
    { route: urlTheTruthIs, component: TheTruthIs },
    { route: urlThingsWeHaveToDo, component: ThingsWeHaveToDo },
    { route: '/lesson2', component: LessonTwo },
    { route: urlConditional, component: Conditional },
    { route: urlEvenThough, component: EvenThough },
    { route: urlTroubles, component: Troubles },
    { route: urlProsAndCons, component: ProsAndCons },
    { route: '/lesson3', component: LessonTree },
    { route: urlLooksLike, component: LooksLike },
    { route: urlNegativeAnswer, component: NegativeAnswer },
    { route: '/lesson4', component: LessonFour },
    { route: urlSomeoneDoesSomethingForUs, component: DoesSomethingForSomeone },
    { route: urlDoSomeFavor, component: DoSomeFavor },
    { route: '/lesson5', component: LessonFive },
    { route: urlBolitiveForm, component: BolitiveForm },
    { route: urlSomethingLooksLike, component: SomethingLooksLike },
    { route: urlStriveForSomething, component: StriveForSomething },
    { route: '/lesson6', component: LessonSix },
    { route: urlDoSomethingForSomeone, component: DoSomethingForSomeone },
    { route: urlConfirm, component: Confirm },
    { route: urlThingsWeThinkWillDOInTheFuture, component: ThingsWeThinkWillDoInTheFuture },
    { route: '/lesson7', component: LessonSeven },
    { route: urlWishSomeoneToDoSomething, component: WishSomeoneToDoSomethting },
    { route: urlExpressFeelings, component: ExpressFeeling },
    { route: urlNotBeSureOfSomething, component: NotBeSureOfSomething },
    { route: urlDifferingResults, component: DifferingResults },
    { route: '/lesson8', component: LessonEight },
    { route: urlDoSomethingWhileDoOtherThing, component: DoSomethingWhileDoOtherThing },
    { route: urlRememberWhatYouWhereDoing, component: RememberWhatYouWhereDoing },
    { route: urlTransitiveVerbs, component: TransitiveVerbs },
    { route: urlIntransitiveVerbs, component: IntransitiveVerbs },
    { route: urlAskingForHelp, component: AskingForHelp },
    { route: urlIndirectInformation, component: IndirectInformation },
    { route: '/lesson9', component: LessonNine },
    { route: urlThingsWeWantToDoInTheFuture, component: ThingsWeWantToDoInTheFuture },
    { route: urlThingsWeAreCapableOf, component: ThingsWeAreCapableOf },
    { route: urlCompareActions, component: CompareActions },
];
export default rutas;