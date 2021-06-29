import useSWR from 'swr';

export type Spell = { index:string, name: string, url:string }

export interface Spells {
    count: number;
    results: Spell[];
}

export const useSpells = () => {
    const { data, error } = useSWR('https://www.dnd5eapi.co/api/spells/', (...args) => fetch(args).then(res => res.json()));

    return {
        spells: data,
        loadingSpells: !error && !data,
        spellError: error
      }
}