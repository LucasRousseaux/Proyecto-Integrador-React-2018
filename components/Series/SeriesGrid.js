import React,{Component} from 'react'
import MarvelApis from '../../apis/MarvelApis'
import List from '../Lista/List.js'

class ListSeries extends Component {

    constructor(props) {
      super(props)

      this.state = {
        loading: true,
        series: [],
        error: null,
      }
      this.api = new MarvelApis();
    }

    componentDidMount() {


      this.setState({loading: true, error: null});

      this.api.getSeries().then(seriesArray => {

        console.log(seriesArray)

        this.setState({loading: false, error: null, series:seriesArray});

      }).catch((error) => {

        console.log(error)

        this.setState({loading: false, error: error, series:[]});

      });


    }


    render() {

      const {loading, error, series} = this.state;

      return (
                <List name="Series Mas Populares" type={'series'} list={series}/>
        );
    }


}


export default ListSeries;
