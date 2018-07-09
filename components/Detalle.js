import React from 'react';
import PropTypes from 'prop-types';
import CrewList from './CrewList';

const Detalle = ({articulo}) => (
  <section className="detail-section">
      <div className="row">
          <div className="col-md-4">
              <img src={articulo.imagen} alt={articulo.alternative} className="img-fluid">
              </img>
          </div>
          <div className="col-md-8">
              <h1>{articulo.titulo} <span>({articulo.anio})</span></h1>
              <div>
                  <h3>Overview</h3>
                  <p>{articulo.descripcion}</p>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div>
                  <h3>Featured Crew</h3>
                  <div className="row">
                     <CrewList crewlist={articulo.crewlist}/>
                  </div>
              </div>
          </div>
      </div>
  </section>

);


Detalle.PropTypes = {
  articulo: PropTypes.shape({
    titulo: PropTypes.string,
    anio: PropTypes.string,
    descripcion: PropTypes.string,
    imagen: PropTypes.string,
    alternative: PropTypes.string,
    crewlist: PropTypes.array,
  }),

}


export default Detalle;
