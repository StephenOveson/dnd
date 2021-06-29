import { useState } from "react";
import Loading from "../../components/Loading";
import { Monster, useMonsters } from "../../utils/swrHooks/useMonsters";

const Monsters = () => {
    const { monsters, loadingMonsters } = useMonsters();
    const [input, setInput] = useState('');
    return (
        <Loading loading={loadingMonsters}>
        </Loading>)
}

export default Monsters;