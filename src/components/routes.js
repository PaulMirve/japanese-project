import LandingPage from "../components/LandingPage";
import DesitionReasons from "./Lessons/Lesson_1/DesitionReasons/DesitionReasons";
import ImperativeForm from "./Lessons/Lesson_1/ImperativeForm/ImperativeForm";
import LessonOne from "./Lessons/Lesson_1/LessonOne";
import SustantivateAdjective from "./Lessons/Lesson_1/SustantivateAdjective/SustantivateAdjective";
import LessonTwo from './Lessons/Lesson_2/LessonTwo';
import ProsAndCons from "./Lessons/Lesson_2/ProsAndCons/ProsAndCons";
import Troubles from "./Lessons/Lesson_2/Troubles/Troubles";
import LessonTree from "./Lessons/Lesson_3/LessonTree";
import LooksLike from "./Lessons/Lesson_3/LooksLike/LooksLike";
import NegativeAnswer from "./Lessons/Lesson_3/NegativeAnswer/NegativeAnswer";
import LessonFour from "./Lessons/Lesson_4/LessonFour";

const rutas = [
    { route: '/', component: LandingPage },
    { route: '/lesson1', component: LessonOne },
    { route: '/lesson2', component: LessonTwo },
    { route: '/lesson3', component: LessonTree },
    { route: '/lesson4', component: LessonFour },
    { route: '/imperative-form', component: ImperativeForm },
    { route: '/transmit-feelings', components: Troubles },
    { route: '/desition-reasons', components: DesitionReasons },
    { route: 'pros-and-cons', components: ProsAndCons },
    { route: '/sustantivate-adjectives', components: SustantivateAdjective },
    { route: '/looks-like', components: LooksLike },
    { route: '/negative-answer', components: NegativeAnswer },
];
export default rutas;