export interface PokemonStats {
    id: number;
    base_stat: number;
    stat: {
        id: string;
        name: string;
    }
} 

export interface PokemonType {
    type: {
        id: number,
        name: string,
    }
}

export interface Pokemon {
    id: number;
    name: string;
    stats: PokemonStats [],
    types :  PokemonType[]
}