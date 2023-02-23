import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/main.css'
import { PokemonCard } from './components/PokemonCard';

interface IResponse {
  id: number;
  name: string;
  imgUrl: string;
  height: number;
  weight: number;
}

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    GetPokemons();
  }, []);

  const GetPokemons = () => {
    const endpoints = [];

    for (let id = 1; id <= 100; id++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res: any) => {
      setPokemons(res);
    });
  };

  return (
    <div className='grid grid-cols-4 gap-4'>
      { pokemons.map((content: any) => {
        return <PokemonCard 
          key={content.data.id}
          id={content.data.id}
          imgUrl={content.data.sprites.front_default}
          name={content.data.name[0].toUpperCase() + content.data.name.substring(1)}
          height={content.data.height}
          weight={content.data.weight}
        />
      })}
    </div>
  )
}

export default App
