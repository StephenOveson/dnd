import Image from "next/dist/client/image";
import Link from "next/link";

export const ClassEntry = ({ index, name, url }) => {
    return (
        <Link href={url.substr(5)}>
            <div className="flex flex-col flex-auto justify-self-center mx-12 my-4 hover:animate-pulse">
                <p className="text-yellow text-center text-lg font-bold z-10">{name}</p>
                <Image src={`/images/classes/DnD5E_ClassSymb_${name}.jpg`} height={240} width={120} className="rounded-md justify-self-center" />
            </div>
        </Link>
    )
}