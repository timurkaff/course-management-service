import React from 'react';

interface CourseItemProps {
    course: {
        id: number;
        title: string;
        description: string;
    };
    removeCourse: (id: number) => void;
}

const CourseItem: React.FC<CourseItemProps> = ({ course, removeCourse }) => (
    <li key={course.id} className="border-b py-2">
        <h2 className="font-semibold">{course.title}</h2>
        <p>{course.description}</p>
        <button onClick={() => removeCourse(course.id)} className="text-red-500">
            Удалить
        </button>
    </li>
);

export default CourseItem;
