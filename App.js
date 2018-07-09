import React, { Component } from 'react';
import { withRouter, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import DetallePelicula from './components/DetallePelicula';
import ListaGrid from './components/ListaGrid';
import BusquedaPelicula from './components/BusquedaPelicula';
import NotFound from './components/NotFound';

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar brandname="Proyecto Integrador" home="Home" peliculas="Peliculas" series="Series" lista="Lista" notifications="3"/>
      <main role="main">
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home"/>} />
          <Route exact path="/home" component={() => <Home />} />
          <Route path="/peliculas" component={(props) => <ListaGrid nombre="Peliculas" {...props}/>} />
          <Route path="/series" component={(props) => <ListaGrid nombre="Series" {...props}/>} />
          <Route path="/lista" component={(props) => <ListaGrid nombre="Lista" {...props}/>} />
          <Route path="/pelicula/:name" component={(props) => <DetallePelicula  {...props} />} />
          <Route path="/buscar" component={(props) => <BusquedaPelicula stringBusqueda="Stranger Things" {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
