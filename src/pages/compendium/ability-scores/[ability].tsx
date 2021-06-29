import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "../../../components/Loading";

const Ability: React.FC = () => {
    const router = useRouter();
    const { ability } = router.query;
    const { data, error } = useSWR(`https://www.dnd5eapi.co/api/ability-scores/${ability}`);

    return (
        <Loading loading={(!data && !error)}>
        </Loading>
    )
}

export default Ability;