import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import Loading from "../../../components/Loading";

const Skill: React.FC = () => {
    const router = useRouter();
    const { skill } = router.query;
    const { data, error } = useSWR(`https://www.dnd5eapi.co/api/skills/${skill}`);

    return (
        <Loading loading={(!data && !error)}>
        </Loading>
    )
}

export default Skill;