import React, { Component } from "react";
import PokemonListContainer from "./pokemon/PokemonListContainer";
import { farFetchd, fetchImageUrl } from "../api/pokemonApiController";
import { thisTypeAnnotation } from "@babel/types";
import PokemonViewerComponent from "./pokemon/PokemonViewerComponent";

export interface Pokemon {
  name: string;
  url: string;
}

interface LocalState {
  title: string;
  isLoading: boolean;
  pokemonList: Pokemon[];
  isViewer: boolean;
  currentUrl: string;
}

interface OwnProps {
  textColor: string;
}

class Root extends Component<OwnProps, LocalState> {
  state = {
    title: "Jensen sutter næsten ikke",
    isLoading: true,
    pokemonList: [],
    isViewer: false,
    currentUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png"
  };

  componentDidMount() {}

  componentWillMount() {
    farFetchd(list => {
      this.setState({ pokemonList: list });
    });
  }

  componentDidUpdate() {}

  viewPoke = (url: string) => {
    fetchImageUrl(url, newUrl => {
      this.setState({ isViewer: true, currentUrl: newUrl });
    });
  };

  render() {
    const color = this.props.textColor;

    return (
      <div>
        {this.state.isViewer ? (
          <PokemonViewerComponent url={this.state.currentUrl} />
        ) : (
          <PokemonListContainer
            viewPokemon={this.viewPoke}
            pokemonList={this.state.pokemonList}
          />
        )}
      </div>
    );

    //   return <PokemonListContainer />;
  }
}

export default Root;
 
