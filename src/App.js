import "./styles.css";
import Pokemon from "./components/Pokemon.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [sprites, setSprites] = useState([]);
  let [name, setName] = useState([]);
  let [holder, setHolder] = useState("Type a name");
  let [error, setError] = useState([]);
  const [imgLogo] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
  );
  const [Title] = useState("Type the name of a Pokemon");

  const getPokemonByName = () => {
    setError("");

    if (name.length === 0) {
      setHolder("This Field is empty!");

      return;
    } else {
      setHolder("Type a name");
      const nameParam = name.toLowerCase();
      getDataByParam(nameParam);
    }
  };

  const getDataByParam = async (param) => {
    await axios
      .get(`${API_URL}${param}`)
      .then((res) => {
        const pokemons = res.data;
        const sprites = res.data.sprites;
        setPokemons(pokemons);
        setSprites(sprites);
      })
      .catch((error) => {
        setError("We could not find that Pokemon");
      });
  };
  const resetName = () => {
    if (name.length > 0) {
      setName("");
    }
  };

  //render() {
  useEffect(() => {
    setError("");
    getDataByParam(25);
  }, []);

  if (error) {
    return (
      <div className="App">
        <h1 className="titleText">{Title}</h1>
        <input
          id="searchBox"
          className="search"
          type="search"
          placeholder={holder}
          onKeyUp={(e) => setName(e.target.value)}
        />

        <button className="searchNameButton" onClick={getPokemonByName}>
          Get Pokemon by Name
        </button>

        <h6 className="errorMessage">{error}</h6>
      </div>
    );
  }
  return (
    <Pokemon
      Title={Title}
      imgLogo={imgLogo}
      pokemons={pokemons}
      sprites={sprites}
      holder={holder}
      getDataByParam={getDataByParam}
      getPokemonByName={getPokemonByName}
      setName={setName}
      resetName={resetName}
    />
  );
};

export default App;
