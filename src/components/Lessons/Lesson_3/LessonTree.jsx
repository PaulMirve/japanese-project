import React from 'react';
import LessonMenu from '../../CustomComponents/LessonMenu';
import topics from './topics_list';

export default function LessonTree() {
    return <LessonMenu lessonName='Lección 3' topics={topics} />
}
