import React from 'react';
import CourseItem from './CourseItem';

interface CourseListProps {
    courses: Array<{ id: number; title: string; description: string }>;
    removeCourse: (id: number) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, removeCourse }) => (
    <ul>
        {courses.map((course) => (
            <CourseItem key={course.id} course={course} removeCourse={removeCourse} />
        ))}
    </ul>
);

export default CourseList;
