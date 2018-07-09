import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({anio,orden,genero}) => (

  <div className="filters-bar">
      <div className="filters-bar-left">
          <select name="filter-year" id="filter-year" className="form-control">
              <option value="">{anio}</option>
          </select>
          <select name="filter-sort" id="filter-sort" className="form-control">
              <option value="">{orden}</option>
          </select>
          <select name="filter-genre" id="filter-genre" className="form-control">
              <option value="">{genero}</option>
          </select>
      </div>
      <div className="filters-bar-right">
          <a href="peliculas-grid.html" className="btn btn-light active" aria-label="Profile">
              <i className="mdi mdi-view-grid" aria-hidden="true"></i>
          </a>
          <a href="peliculas-list.html" className="btn btn-light" aria-label="Profile">
              <i className="mdi mdi-view-list" aria-hidden="true"></i>
          </a>
      </div>
  </div>


);


Filter.PropTypes = {
  anio: PropTypes.oneOf(['2018','2017','2016','2015','2014']),
  orden: PropTypes.oneOf(['Fecha','Titulo','Actor','Director']),
  genero: PropTypes.oneOf(['Accion','Aventura','Comedia','Drama','Romance','Suspenso','Terror','Todos']),

}

Filter.defaultProps = {
  anio: "2018",
  orden: "Fecha",
  genero: "Todos",

}

export default Filter;
