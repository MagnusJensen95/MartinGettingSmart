import React, { Component } from "react";

interface OwnProps {
  url: string;
}

const pokemonViewerComponent: React.FC<OwnProps> = props => {
  console.log(props.url);
  return (
    <div>
      <img src={props.url}></img>
    </div>
  );
};

export default pokemonViewerComponent;
