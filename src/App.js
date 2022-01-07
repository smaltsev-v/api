import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/Pokemoninfo'


export default class App extends Component {
//1
  state = {
        pokemonName: '',
    
    };
//1
  handleFormSubmit = pokemonName => {

    this.setState({ pokemonName });
    
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} /> 
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        <ToastContainer/>
      </div>
    );
  }
}



