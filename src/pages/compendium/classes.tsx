import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { ClassType, useClasses } from "../../utils/swrHooks/useClasses";
import { ClassEntry } from "../../components/ClassEntry";

const Classes = () => {
    const { classes, loadingClasses } = useClasses();
    useEffect(() => console.log(classes), [classes]);
    const [input, setInput] = useState('');
    return (
        <Loading loading={loadingClasses}>
            <body className="pt-20 text-yellow">
                <div className="flex md:flex-row sm:flex-col flex-wrap flex-1 justify-center">
                    {classes?.results?.map((classType: ClassType) => <ClassEntry key={classType.index} {...classType} />)}
                </div>
            </body>
        </Loading>
    )
}

export default Classes;