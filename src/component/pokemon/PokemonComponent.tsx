import React, { Component } from "react";
import { Pokemon } from "../Root";

interface LocalState {}

interface OwnProps {
  pokemon: Pokemon;
  viewPokemon: (url: string) => void;
}

export default class PokemonComponent extends Component<OwnProps> {
  render() {
    const { name, url } = this.props.pokemon;

    return <div onClick={() => this.props.viewPokemon(url)}>{name}</div>;
  }
}
