import Loading from "../../components/Loading";
import { Race, useRaces } from "../../utils/swrHooks/useRaces";

const Races = () => {
    const { races, loadingRaces } = useRaces();
    return (
        <Loading loading={loadingRaces}>
        </Loading>)
}

export default Races;