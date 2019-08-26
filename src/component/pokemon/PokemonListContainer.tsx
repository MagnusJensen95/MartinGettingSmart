import React, { Component } from "react";
import PokemonComponent from "./PokemonComponent";
import { Pokemon } from "../Root";

interface OwnProps {
  pokemonList: Pokemon[];
  viewPokemon: (url: string) => void;
}

export default class PokemonListContainer extends Component<OwnProps> {
  render() {
    return (
      <div>
        {this.props.pokemonList.map(pokemon => {
          return (
            <PokemonComponent
              pokemon={pokemon}
              viewPokemon={this.props.viewPokemon}
            />
          );
        })}
      </div>
    );
  }
}
