export default function Pokemon({
  Title,
  imgLogo,
  pokemons,
  sprites,
  holder,
  getDataByParam,
  getPokemonByName,
  setName,
  resetName
}) {
  const getPokemonByHigherId = () => {
    let currentPokemonId = pokemons.id;
    currentPokemonId += 1;
    getDataByParam(currentPokemonId);
  };
  const getPokemonByLowerId = () => {
    if (pokemons.id === 1) {
      return;
    }
    let currentPokemonId = pokemons.id;
    currentPokemonId -= 1;

    getDataByParam(currentPokemonId);
  };

  return (
    <div className="App">
      <img alt="PokemonLogo" src={imgLogo} className="logo" />
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
      <button className="next" onClick={getPokemonByHigherId}>
        Next Pokemon
      </button>
      <button className="previous" onClick={getPokemonByLowerId}>
        Last Pokemon
      </button>
      <h2 className="pokeName">{pokemons.name}</h2>
      <h6 className="pokeId">{pokemons.id} </h6>
      <img alt="Pokemon" src={sprites.front_default} className="pokeImg" />
    </div>
  );
}
