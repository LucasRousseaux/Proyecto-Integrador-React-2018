import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import List from './List';

const Grid = ({name, type, completeList}) => (

  <div className="py-5 bg-light">
      <div className="container">
          <h1>{name}</h1>
          <Filter anio="Año" orden="Ordenar por" genero="Genero"/>
          <List name={name} type={type} list={completeList}/>
      </div>
  </div>

);

Grid.PropTypes = {
  name: PropTypes.string
}

export default Grid;
