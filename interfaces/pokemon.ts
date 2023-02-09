export interface PokemonStats {
  id: number;
  base_stat: number;
  stat: {
    id: string;
    name: string;
  };
}

export interface PokemonType {
  type: {
    id: number;
    name: string;
  };
}

export interface PokemonSpecy {
  is_baby: string;
  forms_switchable: string;
  base_happiness: string;
  is_legendary: string;
  gender_rate: string;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  specy: PokemonSpecy;
  stats: PokemonStats[];
  types: PokemonType[];
}
