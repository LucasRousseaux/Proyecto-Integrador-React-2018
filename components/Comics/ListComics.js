import React,{Component} from 'react'
import MarvelApis from '../../apis/MarvelApis'
import List from '../Lista/List.js'

class Comics extends Component {

    constructor(props) {
      super(props)

      this.state = {
        loading: true,
        comics: [],
        error: null,
      }
      this.api = new MarvelApis();
    }

    componentDidMount() {


      this.setState({loading: true, error: null});

      this.api.getComics().then(comicsArray => {

        console.log(comicsArray)

        this.setState({loading: false, error: null, comics:comicsArray});

      }).catch((error) => {

        console.log(error)

        this.setState({loading: false, error: error, comics:[]});

      });


    }


    render() {

      const {loading, error, comics} = this.state;

      return (
                <List name="Comics Mas Populares" type={'comics'} list={comics}/>
        );
    }


}


export default Comics;
