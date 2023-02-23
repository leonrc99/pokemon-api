import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/main.css'
import { PokemonCard } from './components/PokemonCard';
import { IResponse } from './interfaces/interfaces';

function App() {
  const [pokemons, setPokemons] = useState<Array<IResponse>>([]);

  useEffect(() => {
    GetPokemons();
  }, []);

  const GetPokemons = () => {
    const endpoints: Array<string> = [];

    for (let id = 1; id <= 100; id++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res: Array<IResponse>) => { setPokemons(res) });
  };

  return (
    <div className='grid grid-cols-3 gap-3'>
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
