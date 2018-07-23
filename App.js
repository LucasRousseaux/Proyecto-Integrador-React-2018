import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import {DetallePelicula} from './components/Detalle';
import {ListaGrid} from './components/Lista';
import MarvelGrid from './components/Grid';
import Busqueda from './components/Busqueda';
import NotFound from './components/NotFound';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      string: "",
      isAuthenticated: Boolean(window.sessionStorage.getItem('usrlogin')),
    }
  }

  authenticate = () => {
    this.setState({ isAuthenticated: true });
    window.sessionStorage.setItem('usrlogin','true');
  };

  signout = () => {
    const { history } = this.props;
    this.setState({ isAuthenticated: false });
    window.sessionStorage.removeItem('usrlogin');
    history.push("/");
  };

  handleOnChange = (event) => {
    const string = event.target.value;
    console.log(event.target.value);
    this.setState({string:string});
    console.log(this.state.string);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.history);
    this.props.history.push("/buscar");
    //.push('/buscar');
  }

  render() {


    return (
      <div className="App">
      <NavBar brandname="Proyecto Integrador" home="Home" comics="Comics" series="Series" lista="Lista" notifications="3" handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>
      <main role="main">
        <Switch>
          <Route exact path="/" component={() => <Home/>} />
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/comics" component={(props) => <MarvelGrid type="comics" name="Comics" {...props}/>} />
          <Route exact path="/series" component={(props) => <MarvelGrid type="series" name="Series" {...props}/>} />
          <Route path="/lista" component={(props) => <ListaGrid nombre="Lista" {...props}/>} />
          <Route path="/pelicula/:name" component={(props) => <DetallePelicula  {...props} />} />
          <Route path="/buscar" component={(props) => <Busqueda stringBusqueda={this.state.string} {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
