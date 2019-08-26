import { assembler } from "./pokemonAssembler";
import { Pokemon } from "../component/Root";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export function farFetchd(callback: (result: Pokemon[]) => void) {
  fetch(baseUrl + "?offset=20&limit=20")
    .then(res => res.json())
    .then(res => {
      return callback(assembler(res.results));
    });
}

export function fetchImageUrl(url: string, callback: (url: string) => void) {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      return callback(res.sprites.back_default);
    });
}
