import useSWR from 'swr';

export type Monster = { index:string, name: string, url:string }

export interface Monsters {
    count: number;
    results: Monster[];
}

export const useMonsters = () => {
    const { data, error } = useSWR('https://www.dnd5eapi.co/api/monsters/');

    return {
        monsters: data,
        loadingMonsters: !error && !data,
        monsterError: error
      }
}