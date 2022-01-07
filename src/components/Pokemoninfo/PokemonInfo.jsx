import { Component } from "react";
// import PokemonDataView from '';
// import PokemonErrorView from '';
// import PokemonPendingView from '';

export default class Pokemoninfo extends Component {
    state = {
        pokemon: null,
        loading: false
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonInfo;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) { 
            
            console.log('изменили имя покемона ');

            this.setState({ loading: true })
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({pokemon})).finally(()=> this.setState({loading:false }))
        }
    }



    render() {
        const {loading,pokemon }= this.state
        const {pokemonName }=this.props
        return (
            <div>
                <h1>Pakemoninfo</h1>
                {loading && <div>Загрузка...</div>}
                {!pokemonName&&<div>Ведите покемона</div>}
                {pokemon && (
                    <div>
                    <p>{pokemon.name}</p>
                    <img
                        src={pokemon.sprites.other['offical-artwork'].front_default}
                        alt=""
                        width="300"
                    />
                </div>
                )}
            
            </div>
        );
    }
}