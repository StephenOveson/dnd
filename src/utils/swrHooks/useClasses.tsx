import useSWR from 'swr';

export type ClassType = { index:string, name: string, url:string }

export interface Classess {
    count: number;
    results: ClassType[];
}

export const useClasses = () => {
    const { data, error } = useSWR('https://www.dnd5eapi.co/api/classes/');

    return {
        classes: data,
        loadingClasses: !error && !data,
        classesError: error
      }
}