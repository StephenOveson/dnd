import Loading from "../../components/Loading";
import { Spell, useSpells } from "../../utils/swrHooks/useSpells";

const Spells = () => {
    const { spells, loadingSpells } = useSpells();
    return (
        <Loading loading={loadingSpells}>
        </Loading>)
}

export default Spells;