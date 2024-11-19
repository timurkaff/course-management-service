import React from 'react';
import { useCourses } from '../../Features/Api/getCourses';

const HomePage: React.FC = () => {
    const { data, isLoading, error } = useCourses();

    if (isLoading) return <div className="text-center mt-5">Загрузка данных...</div>;
    if (error instanceof Error) return <div className="text-center mt-5 text-red-500">Ошибка: {error.message}</div>;

    return (
        <div className="p-4">
            <h1 className="font-bold text-2xl text-center mt-5">Добро пожаловать на Home</h1>
            <h2 className="text-lg text-center mt-4">Факты о кошках:</h2>
            <ul className="mt-5 max-w-xl mx-auto">
                {data?.data.map((fact: any, index: number) => (
                    <li key={index} className="border-b py-4">
                        <p>{fact.fact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;