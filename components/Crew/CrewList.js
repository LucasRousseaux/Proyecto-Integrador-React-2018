import React from 'react';
import PropTypes from 'prop-types';
import Crew from './Crew';

const CrewList = ({crewlist}) => (

  crewlist.map((item,index) => <Crew key={index} item={item}/>)

);


CrewList.PropTypes = {
  item: PropTypes.array,
}


export default CrewList;
