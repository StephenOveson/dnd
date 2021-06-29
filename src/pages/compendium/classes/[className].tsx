import { useRouter } from 'next/router';
import useSWR from 'swr';
import Loading from '../../../components/Loading';
import Link from 'next/link';

const ClassCard: React.FC = () => {
    const router = useRouter();
    const { className } = router.query;
    const { data, error } = useSWR(`https://www.dnd5eapi.co/api/classes/${className}`);

    return (
        <Loading loading={(!data && !error)}>
        </Loading>
    );
}

export default ClassCard;