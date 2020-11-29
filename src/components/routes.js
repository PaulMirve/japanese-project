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
import DoSomethingForSomeone from './Lessons/Lesson_4/DoesSomethingForSomeone/DoesSomethingForSomeone';
import DoSomeFavor from './Lessons/Lesson_4/DoSomeFavor/DoSomeFavor';
import BolitiveForm from './Lessons/Lesson_5/BolitiveForm/BolitiveForm';
import { urlDesitionReasons, urlImperativeForm, urlSustantivateAdjectives } from "./Lessons/Lesson_1/topics_list";

const rutas = [
    { route: '/', component: LandingPage },
    { route: '/lesson1', component: LessonOne },
    { route: urlDesitionReasons, components: DesitionReasons },
    { route: urlImperativeForm, component: ImperativeForm },
    { route: urlSustantivateAdjectives, components: SustantivateAdjective },
    { route: '/lesson2', component: LessonTwo },
    { route: 'pros-and-cons', components: ProsAndCons },
    { route: '/transmit-feelings', components: Troubles },
    { route: '/lesson3', component: LessonTree },
    { route: '/looks-like', components: LooksLike },
    { route: '/negative-answer', components: NegativeAnswer },
    { route: '/lesson4', component: LessonFour },
    { route: '/do-something-for-someone', component: DoSomethingForSomeone },
    { route: '/do-some-favor', component: DoSomeFavor },
    { route: '/bolitive-form', component: BolitiveForm }
];
export default rutas;