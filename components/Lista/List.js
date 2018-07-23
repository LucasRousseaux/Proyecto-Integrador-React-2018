import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const List = ({name,type,list}) => (

  <section className="items-section">
      <h5 className="items-section-title">{name}<a href="">See All</a></h5>
      <div className="items-section-body">
          <div className="row">

            {list.map((item,index) => <Article key={index} type={type} id={item.id} title={item.title} date={item.modified} image={item.thumbnail.path+'.'+item.thumbnail.extension} alternative={item.title}/>)}

          </div>
      </div>
  </section>


);

List.PropTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

export default List;


//<ListaArticulo listado={listado} />
