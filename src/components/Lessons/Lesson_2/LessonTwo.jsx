import React from 'react';
import topics from './topics_list';
import LessonMenu from '../../CustomComponents/LessonMenu';

export default function LessonOne() {
    return <LessonMenu lessonName='Lección 2' topics={topics} />
}
