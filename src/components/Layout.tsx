import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Layout = ({ children }) => {
    const [lit, setLit] = useState(false);

    const torchController = {
        onMouseEnter: () => setLit(true),
        onMouseLeave: () => setLit(false)
    }

    return (
        <>
            <nav className={"fixed top-0 flex flex-grid px-8 py-4 bg-lightGrey border-b-1 min-w-full place-items-center z-40"}>
                <Image src={lit ? "/images/torch_lit.gif" : "/images/torch_unlit.png"} {...torchController} height={40} width={40} />
                <Link href="/" ><a {...torchController} className="text-yellow font-sans text-3xl hover:text-white hover:animate-pulse">DragonSlayer</a></Link>
                <div className="fixed right-0 flex justify-end px-8">
                    <Link href="/campaigns"><a {...torchController} className="text-yellow font-sans text-xl hover:text-white hover:animate-pulse self-center align-right justify-self-end px-3">Campaigns</a></Link>
                    <Link href="/characters"><a {...torchController} className="text-yellow font-sans text-xl hover:text-white hover:animate-pulse self-center align-right justify-self-end px-3">Characters</a></Link>
                    <div className="group inline-block relative self-center align-right justify-self-end px-3">
                        <Link href="/compendium"><a {...torchController} className="text-yellow font-sans text-xl hover:text-white hover:animate-pulse">Compendium</a></Link>
                        <ul className="bg-lightGrey absolute hidden -left-1 group-hover:block py-1 border-2 border-yellow">
                            <li><Link href="/compendium/classes"><a {...torchController} className="text-white font-sans text-xl block bg-lightGrey hover:bg-grey hover:text-yellow hover:animate-pulse px-8 py-2">Classes</a></Link></li>
                            <li><Link href="/compendium/monsters"><a {...torchController} className="text-white font-sans text-xl block bg-lightGrey hover:bg-grey hover:text-yellow hover:animate-pulse px-8 py-2">Monsters</a></Link></li>
                            <li><Link href="/compendium/races"><a {...torchController} className="text-white font-sans text-xl block bg-lightGrey hover:bg-grey hover:text-yellow hover:animate-pulse px-8 py-2">Races</a></Link></li>
                            <li><Link href="/compendium/spells"><a {...torchController} className="text-white font-sans text-xl block bg-lightGrey hover:bg-grey hover:text-yellow hover:animate-pulse px-8 py-2">Spells</a></Link></li>
                        </ul>
                    </div>
                    <Image src={lit ? "/images/torch_lit.gif" : "/images/torch_unlit.png"} {...torchController} height={40} width={40} className="align-right justify-self-end" />
                </div>
            </nav>
            <div className="min-h-screen bg-grey">
                {children}
            </div>
        </>)
}