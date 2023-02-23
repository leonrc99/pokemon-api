export interface IPokemonCard {
    id: number;
    name: string;
    imgUrl: string;
    height: number;
    weight: number;
}

export interface IResponse {
    data: {
        id: number,
        name: string,
        height: number,
        weight: number,
        sprites: {
            front_default: string,
        }
    } 
}