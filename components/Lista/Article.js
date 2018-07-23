import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Article = ({id,type,title,date,image,alternative}) => (

  <article className="col-md-2">
      <Link to={`/${type}/${id}`} className="grid-item">
          <img src={image} alt={alternative} className="img-fluid">
          </img>
          <span className="grid-item-body">
              <span className="grid-item-title">{title}</span>
              <span className="grid-item-date">{date}</span>
          </span>
      </Link>
  </article>

);

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image:  PropTypes.string,
  alternative: PropTypes.string

}

Article.defaultProps = {
  image:  "/home/lucas/Desktop/Apache/clase-react-2018/placeholder.png",
  alternative: "Image",

}

export default Article;
