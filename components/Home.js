import React from 'react';
import Lista from './Lista';

const listadoArticulos = [
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
const Home = () => (
  <div className="py-5 bg-light">
      <div className="container">
        <Lista nombre="Mi Lista" listado={listadoArticulos}/>
        <Lista nombre="Peliculas Mas Populares" listado={listadoArticulos}/>
        <Lista nombre="Series Mas Populares" listado={listadoArticulos}/>
      </div>
  </div>
);

export default Home;
