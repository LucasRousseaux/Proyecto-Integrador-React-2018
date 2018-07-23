import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Lista from './Lista';

const todasPeliculas = [
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Imagen Pelicula Thor Ragnarok"}
]

const ListaGrid = ({nombre}) => (

  <div className="py-5 bg-light">
      <div className="container">
          <h1>{nombre}</h1>
          <Filter anio="Año" orden="Ordenar por" genero="Genero"/>
          <Lista nombre={nombre} listado={todasPeliculas}/>
      </div>
  </div>

);

ListaGrid.PropTypes = {
  nombre: PropTypes.string
}

export default ListaGrid;
