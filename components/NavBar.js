import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom'

const NavBar = ({brandname,home,peliculas,series,lista,notifications}) => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/home'> {brandname}  </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/home'> Home  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/peliculas'> Peliculas  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/series'> Series  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/lista'> Lista  </NavLink>
                        <span className="badge badge-danger">{notifications}</span>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0" action="">
                    <input className="form-control" type="text" placeholder="Buscar Película o Serie" aria-label="Search">
                    </input>
                </form>
            </div>
        </div>
    </nav>


);

NavBar.PropTypes = {
  brandname: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  peliculas:  PropTypes.string.isRequired,
  series:  PropTypes.string.isRequired,
  lista:  PropTypes.string.isRequired,
  notifications: PropTypes.number
}

NavBar.defaultProps = {
  notifications: 0,
}

export default NavBar;
