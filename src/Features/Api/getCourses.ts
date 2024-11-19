import { useQuery } from '@tanstack/react-query';

export const useCourses = () => {
    return useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await fetch('https://catfact.ninja/facts'); // api/courses
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            return response.json();
        },
    });
};