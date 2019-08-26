import { Pokemon } from "../component/Root";

interface PokemonListResult {
  name: string;
  url: string;
}

export function assembler(result: PokemonListResult[]): Pokemon[] {
  const pokemons: PokemonListResult[] = [];
  result.map(({ name, url }) => {
    pokemons.push({ name, url });
  });

  return pokemons;
}
