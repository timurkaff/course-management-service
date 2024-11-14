import React from 'react';

interface InputFormProps {
    newCourseTitle: string;
    newCourseDescription: string;
    setNewCourseTitle: (value: string) => void;
    setNewCourseDescription: (value: string) => void;
    handleAddCourse: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
    newCourseTitle,
    newCourseDescription,
    setNewCourseTitle,
    setNewCourseDescription,
    handleAddCourse
}) => (
    <div className="mb-4">
        <input
            type="text"
            placeholder="Заголовок курса"
            value={newCourseTitle}
            onChange={(e) => setNewCourseTitle(e.target.value)}
            className="border p-2 mr-2"
        />
        <input
            type="text"
            placeholder="Описание курса"
            value={newCourseDescription}
            onChange={(e) => setNewCourseDescription(e.target.value)}
            className="border p-2 mr-2"
        />
        <button onClick={handleAddCourse} className="bg-blue-500 text-white p-2">
            Добавить курс
        </button>
    </div>
);

export default InputForm;
