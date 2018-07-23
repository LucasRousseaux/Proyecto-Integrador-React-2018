import React from 'react';
import PropTypes from 'prop-types';
import Articulo from './Articulo';

const Lista = ({nombre,listado}) => (

  <section className="items-section">
      <h5 className="items-section-title">{nombre}<a href="">Ver todas</a></h5>
      <div className="items-section-body">
          <div className="row">

            {listado.map((item,index) => <Articulo key={index} titulo={item.titulo} fecha={item.fecha} imagen={item.imagen} alternative={item.alternative}/>)}

          </div>
      </div>
  </section>


);

Lista.PropTypes = {
  nombre: PropTypes.string.isRequired,
  listado: PropTypes.array.isRequired,
}

export default Lista;


//<ListaArticulo listado={listado} />
