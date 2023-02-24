import { FC } from "react"

import Head from "next/head"

interface Props {
  title?: string;
}

export const  Layout: FC<Props> = ({ children, title }) => {
  return (
    <div>
        <Head>
            <title>{title || 'Pokémon App'}</title>
            <meta name="author" content="Ricardo Caterino" />
            <meta name="description" content={`Información sobre el pokémon ${ title}`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex,`} />
        </Head>
        
        {/* Navbar */}

        <main>
            { children }
        </main>

    </div>
  );
}
