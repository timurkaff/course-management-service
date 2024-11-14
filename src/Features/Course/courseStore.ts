import {create} from 'zustand';

interface Course {
    id: number;
    title: string;
    description: string;
}

interface CourseState {
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (id: number) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({ courses: [...state.courses, course] }));
        console.log('add course', course);
    },
    removeCourse: (id) => {
        set((state) => ({
            courses: state.courses.filter((course) => course.id !== id),
        }));
        console.log('remove course', id);
    },
}));

