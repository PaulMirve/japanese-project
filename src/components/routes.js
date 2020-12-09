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
];
export default rutas;