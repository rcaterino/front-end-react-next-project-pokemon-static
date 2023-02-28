import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";

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
        
        <Navbar />

        <main style={{
          padding: '0px 20px',
        }}>
            { children }
        </main>

    </div>
  );
}
