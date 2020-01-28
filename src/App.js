import React from "react";
import "./App.css";

// acá tenemos que crear el componente Jumbotron
const Jumbotron = props => {
  // aca tenemos que retorna el HTML esperado utilizando las propiedades
  return (
    <div class="jumbotron m-5">
      <h1 class="display-4">{props.title}</h1>
      <p class="lead">{props.description}</p>
      <a class="btn btn-primary btn-lg" href={props.buttonURL} role="button">
        {props.buttonLabel}
      </a>
    </div>
  );
};

const App = () => {
  return (
    <Jumbotron
      title="Welcome to react"
      description="React is the most popular rendering library in the world"
      buttonLabel="Go to the official website"
      buttonURL="https://reactjs.org/"
    />
  );
};

export default App;
