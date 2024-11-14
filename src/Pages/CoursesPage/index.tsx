import React, { useState } from 'react';
import { useCourseStore } from '../../Features/Course/courseStore'; 
import InputForm from './Components/InputForm';
import CourseList from './Components/CourseList';

const CoursesPage: React.FC = () => {
    const { courses, addCourse, removeCourse } = useCourseStore();
    const [newCourseTitle, setNewCourseTitle] = useState('');
    const [newCourseDescription, setNewCourseDescription] = useState('');

    const handleAddCourse = () => {
        const newCourse = {
            id: Date.now(),
            title: newCourseTitle,
            description: newCourseDescription,
        };
        addCourse(newCourse);
        setNewCourseTitle('');
        setNewCourseDescription('');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Курсы</h1>
            <InputForm
                newCourseTitle={newCourseTitle}
                newCourseDescription={newCourseDescription}
                setNewCourseTitle={setNewCourseTitle}
                setNewCourseDescription={setNewCourseDescription}
                handleAddCourse={handleAddCourse}
            />
            <CourseList courses={courses} removeCourse={removeCourse} />
        </div>
    );
};

export default CoursesPage;
