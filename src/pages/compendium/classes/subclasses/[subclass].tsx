import { useRouter } from 'next/router';
import useSWR from 'swr';
import Loading from '../../../../components/Loading';
import Link from 'next/link';
import { useEffect } from 'react';

const Subclass: React.FC = () => {
    const router = useRouter();
    const { subclass } = router.query;
    const { data, error } = useSWR(`https://www.dnd5eapi.co/api/subclasses/${subclass}`);

    useEffect(() => console.log(data), [data])

    return (
        <></>
    );
}

export default Subclass;