import useSWR from 'swr';

export type Race = { index:string, name: string, url:string }

export interface Races {
    count: number;
    results: Race[];
}

export const useRaces = () => {
    const { data, error } = useSWR('https://www.dnd5eapi.co/api/races/');

    return {
        races: data,
        loadingRaces: !error && !data,
        racesError: error
      }
}