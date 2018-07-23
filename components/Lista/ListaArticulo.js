import React from 'react';
import PropTypes from 'prop-types';
import Articulo from './Articulo';

const ListaArticulo = ({listado}) => (

  listado.map((item,index) => <Articulo key={index} titulo={item.titulo} fecha={item.fecha} imagen={item.imagen} alternative={item.alternative}/>)

);

ListaArticulo.PropTypes = {
  listado: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string,
    fecha: PropTypes.string,
    imagen: PropTypes.string,
    alternative: PropTypes.string,
  }))
}

export default ListaArticulo;
