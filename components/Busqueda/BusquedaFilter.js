import React from 'react';
import PropTypes from 'prop-types';

const BusquedaFilter = ({cantidadPeliculas,cantidadSeries}) => (

<div className="filters-bar">
    <div className="filters-bar-left">
        <a href="busqueda-peliculas-grid.html" className="btn btn-outline-dark active">Películas ({cantidadPeliculas})</a>
        <a href="busqueda-series-grid.html" className="btn btn-outline-dark">Series ({cantidadSeries})</a>
    </div>
    <div className="filters-bar-right">
        <a href="#" className="btn btn-light active" aria-label="Profile">
            <i className="mdi mdi-view-grid" aria-hidden="true"></i>
        </a>
        <a href="#" className="btn btn-light" aria-label="Profile">
            <i className="mdi mdi-view-list" aria-hidden="true"></i>
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
