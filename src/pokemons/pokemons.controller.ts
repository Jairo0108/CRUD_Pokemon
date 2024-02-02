import {
  Controller,
  Get,
  Delete,
  Param,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto, updatePokemonDto } from './dto/pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonService: PokemonsService) {}

  @Get()
  getAllPokemons() {
    return this.pokemonService.getAllPokemons();
  }

  @Post()
  createPokemon(@Body() nuevoPokemon: CreatePokemonDto) {
    return this.pokemonService.createPokemons(
      nuevoPokemon.id,
      nuevoPokemon.nombre,
      nuevoPokemon.especie,
      nuevoPokemon.tipo1,
      nuevoPokemon.tipo2,
      nuevoPokemon.descripcion,
      nuevoPokemon.peso_promedio,
      nuevoPokemon.altura_promedio,
    );
  }

  @Delete(":id")
  deletePokemon(@Param("id") id: number){
    this.pokemonService.deletePokemon(id);
  }

  @Patch(":id")
  updatePokemon(@Param("id") id: number, @Body() updatedFields: updatePokemonDto){
    return this.pokemonService.updatePokemon(id, updatedFields);
  }
}
