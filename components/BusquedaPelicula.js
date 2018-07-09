import React from 'react';
import PropTypes from 'prop-types';
import BusquedaFilter from './BusquedaFilter';
import Lista from './Lista';

const resultadoPeliculas = [
  {imagen:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/iXM7lhDdJhJHQBBfbLfq73Xcu8F.jpg",
  titulo:"Stranger Things",
  fecha:"July 15, 2016",
  alternative:"Imagen Pelicula Stranger Things"},
  {imagen:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/iXM7lhDdJhJHQBBfbLfq73Xcu8F.jpg",
  titulo:"Stranger Things",
  fecha:"July 15, 2016",
  alternative:"Imagen Pelicula Stranger Things"}
];

const BusquedaPelicula = ({stringBusqueda}) => (

  <div class="py-5 bg-light">
      <div class="container">

      <h1>Búsqueda >  {stringBusqueda} ... en Películas</h1>
      <BusquedaFilter cantidadPeliculas={2} cantidadSeries={2}/>
      <Lista nombre="Busqueda Pelicula" listado={resultadoPeliculas} />

      </div>
  </div>

);


BusquedaPelicula.PropTypes = {
  stringBusqueda: PropTypes.string.isRequired,

}


export default BusquedaPelicula;
