import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Articulo = ({titulo,fecha,imagen,alternative}) => (

  <article className="col-md-2">
      <Link to={`/pelicula/${titulo}`} className="grid-item">
          <img src={imagen} alt={alternative} className="img-fluid">
          </img>
          <span className="grid-item-body">
              <span className="grid-item-title">{titulo}</span>
              <span className="grid-item-date">{fecha}</span>
          </span>
      </Link>
  </article>

);

Articulo.PropTypes = {
  titulo: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  imagen:  PropTypes.string,
  alternative: PropTypes.string

}

Articulo.defaultProps = {
  imagen:  "/home/lucas/Desktop/Apache/clase-react-2018/placeholder.png",
  alternative: "Image",

}

export default Articulo;
