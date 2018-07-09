import React from 'react';
import PropTypes from 'prop-types';

const BusquedaFilter = ({cantidadPeliculas,cantidadSeries}) => (

<div class="filters-bar">
    <div class="filters-bar-left">
        <a href="busqueda-peliculas-grid.html" class="btn btn-outline-dark active">Películas ({cantidadPeliculas})</a>
        <a href="busqueda-series-grid.html" class="btn btn-outline-dark">Series ({cantidadSeries})</a>
    </div>
    <div class="filters-bar-right">
        <a href="#" class="btn btn-light active" aria-label="Profile">
            <i class="mdi mdi-view-grid" aria-hidden="true"></i>
        </a>
        <a href="#" class="btn btn-light" aria-label="Profile">
            <i class="mdi mdi-view-list" aria-hidden="true"></i>
        </a>
    </div>
</div>

);


BusquedaFilter.PropTypes = {
  cantidadPeliculas: PropTypes.number,
  cantidadSeries: PropTypes.number,
}

BusquedaFilter.defaultProps = {
  cantidadPeliculas: 0,
  cantidadSeries: 0,

}


export default BusquedaFilter;
