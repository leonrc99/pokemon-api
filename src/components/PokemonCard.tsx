import { IPokemonCard } from "../interfaces/interfaces";

export function PokemonCard(props: IPokemonCard) {
    return (
        <div className="bg-slate-600 max-w-sm rounded overflow-hidden grid shadow-lg justify-items-center">
            <img className="w-full" src={props.imgUrl}/>
            <div className="px-6 py-4 font-semibold text-white">
                { props.id } - {props.name}
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Altura: {props.height}</span>
                <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Peso: {props.weight}</span>
            </div>
        </div>
    )
}