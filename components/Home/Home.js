import React from 'react'
import Lista from '../Lista'
import ListComics from '../Comics'
import ListSeries from '../Series'

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
        <ListComics />
        <ListSeries />
      </div>
  </div>
);

export default Home;
