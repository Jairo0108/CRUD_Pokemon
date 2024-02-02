// Esto es para que se reproduzcan
export enum Especie {
  Semilla = 'Semilla',
}

// Aqui defini los tipos que puede tener.
export enum Tipo {
  Null = 'Null',
  Acero = 'Acero',
  Agua = 'Agua',
  Bicho = 'Bicho',
  Dragon = 'Dragon',
  Electrico = 'Electrico',
  Fantasma = 'Fantasma',
  Fuego = 'Fuego',
  Hada = 'Hada',
  Hielo = 'Hielo',
  Lucha = 'Lucha',
  Normal = 'Normal',
  Planta = 'Planta',
  Psiquico = 'Psiquico',
  Roca = 'Roca',
  Siniestro = 'Siniestro',
  Tierra = 'Tierra',
  Volador = 'Volador',
  Veneno = 'Veneno',
}

// Aqui añadi un constructor de pokemons con lo basico que debe tener.
export class Pokemon {
    id: number
    nombre: string
    especie: Especie
    tipo1: Tipo
    tipo2: Tipo
    descripcion: string
    peso_promedio: number
    altura_promedio: number
}