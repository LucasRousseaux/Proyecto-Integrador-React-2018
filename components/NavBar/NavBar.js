import React from 'react';
import PropTypes from 'prop-types';
import {Redirect,NavLink} from 'react-router-dom'
import Busqueda from '../Busqueda';

const NavBar = ({brandname,home,comics,series,lista,notifications,handleOnChange,handleOnSubmit}) => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/home'> {brandname}  </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/home'> {home}  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/comics'> {comics}  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/series'> {series}  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-item nav-link" activeStyle={{fontWeight: "bold"}} to='/lista'> {lista}  </NavLink>
                        <span className="badge badge-danger">{notifications}</span>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0" onSubmit={handleOnSubmit}>
                    <input className="form-control" type="text" onChange={handleOnChange} placeholder="Buscar Película o Serie" aria-label="Search">
                    </input>
                    <input className="btn btn-primary" type="submit" value="Buscar" />
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
