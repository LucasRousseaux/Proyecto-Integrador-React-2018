import React from 'react';
import PropTypes from 'prop-types';

const Crew = ({item}) => (

  <div className="col-md-4">
      <h5>{item.crewname}</h5>
      <p>{item.crewrole}</p>
  </div>

);


Crew.PropTypes = {
  item: PropTypes.shape({
    crewname: PropTypes.string,
    crewrole: PropTypes.string
  }),

}




export default Crew;
