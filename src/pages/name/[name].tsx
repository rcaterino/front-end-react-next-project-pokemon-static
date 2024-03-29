import { useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";
interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setisInFavorites(!isInFavorites);
  }

  if (isInFavorites) {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={1}>
        <Grid xs={12} sm={4}  xl={2} >
          <Card isHoverable css={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8} xl={2}>
          <Card>
            <Card.Header css={{ display: 'container', justifyContent: 'space-between' }}>
              <Text h3 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToggleFavorites}
              >
                {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={20}>Sprites:</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit151')
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo( name );

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByNamePage;