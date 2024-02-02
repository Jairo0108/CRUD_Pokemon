import {
  IS_IN,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Especie, Tipo } from '../pokemon.entity';

export class CreatePokemonDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEnum(Especie)
  @IsNotEmpty()
  especie: Especie;

  @IsEnum(Tipo)
  @IsNotEmpty()
  tipo1: Tipo;

  @IsEnum(Tipo)
  @IsNotEmpty()
  tipo2: Tipo;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  peso_promedio: number;

  @IsNumber()
  @IsNotEmpty()
  altura_promedio: number;
}

export class updatePokemonDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsEnum(Especie)
  @IsNotEmpty()
  @IsOptional()
  especie?: Especie;

  @IsEnum(Tipo)
  @IsNotEmpty()
  @IsOptional()
  tipo1?: Tipo;

  @IsEnum(Tipo)
  @IsNotEmpty()
  @IsOptional()
  tipo2?: Tipo;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  peso_promedio?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  altura_promedio?: number;
}
