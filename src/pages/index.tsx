import { Button } from "@nextui-org/react";

import { NextPage } from "next";
import { GetStaticProps } from 'next'

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse } from "@/interfaces";

const HomePage: NextPage = (Props) => {
  console.log(Props)
  return (
    <Layout title='Listado de Pokémons'>
      <Button color="gradient">
        Hola mundo
      </Button>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?linit=151');
  
  console.log( data )

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
