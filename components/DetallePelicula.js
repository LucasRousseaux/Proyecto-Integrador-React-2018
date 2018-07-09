import React from 'react';
import Lista from './Lista';
import Detalle from './Detalle';

const pelicula = {
  imagen: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  alternative: "Imagen de Pelicula Thor Ragnarok",
  titulo: "Thor: Ragnarok",
  anio: "2017",
  descripcion:  "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
  crewlist :  [
    {crewname: "Taika Waititi", crewrole: "Director1"},
    {crewname: "Taika Waititi", crewrole: "Director2"},
    {crewname: "Taika Waititi", crewrole: "Director3"},
    {crewname: "Taika Waititi", crewrole: "Director4"},
  ]
}

const listadoPeliculas = [
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
  {imagen:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
  titulo:"Thor: Ragnarok",
  fecha:"October 25, 2017",
  alternative:"Pelicula Thor Ragnarok"},
]


const DetallePelicula = () => (
  <div className="py-5 bg-light">
      <div className="container">
      <Detalle articulo={pelicula}/>
      <Lista nombre="Recomendaciones" listado={listadoPeliculas}/>
      </div>
  </div>
);

export default DetallePelicula;
