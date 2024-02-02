import { Injectable } from '@nestjs/common';
import { Especie, Pokemon, Tipo} from './pokemon.entity';
import { updatePokemonDto } from './dto/pokemon.dto';

@Injectable()
export class PokemonsService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      nombre: "Bulbasaur",
      especie: Especie.Semilla,
      tipo1: Tipo.Planta,
      tipo2: Tipo.Veneno,
      descripcion: "Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo.",
      peso_promedio: 6.9,
      altura_promedio: 0.7,
    },
  ];

  //Devuelvo todos los pokemons del arreglo privado de arriba
  getAllPokemons() {
    return this.pokemons;
  }

  //Creo pokemons
  createPokemons(
    id: number,
    nombre: string,
    especie: Especie,
    tipo1: Tipo,
    tipo2: Tipo,
    descripcion: string,
    peso_promedio: number,
    altura_promedio: number,
  ) {
    const pokemon = {
      id,
      nombre,
      especie,
      tipo1,
      tipo2,
      descripcion,
      peso_promedio,
      altura_promedio,
    };
    this.pokemons.push(pokemon);
    return pokemon;
  }

  //Borro Pokemon
  deletePokemon(id: number){
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
  }

  //Obtengo pokemon por ID
  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((pokemon) => pokemon.id !== id);
  }

  // Actualizo Pokemon
  updatePokemon(id: number, updatedField: updatePokemonDto): Pokemon{
    const pokemon = this.getPokemonById(id);
    const nuevoPokemon = Object.assign(pokemon, updatedField);
    this.pokemons.map((pokemon) => pokemon.id !== id ? nuevoPokemon : Pokemon);
    return nuevoPokemon
  }
}