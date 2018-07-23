import React,{Component} from 'react'
import MarvelApis from '../../apis/MarvelApis'
import List from '../Lista/List.js'

class MarvelGrid extends Component {

    constructor(props) {

      super(props)

      console.log(props)

      this.state = {
        loading: true,
        list: [],
        error: null,
      }

      this.api = new MarvelApis();

      console.log(this.state)
    }

    componentDidMount() {


      this.setState({loading: true, error: null});

      this.api.getList(this.props.type).then(array => {

        console.log(array)

        this.setState({loading: false, error: null, list:array});

      }).catch((error) => {

        console.log(error)

        this.setState({loading: false, error: error, list:[]});

      });


    }


    render() {

      const {loading, error, list} = this.state

      const {name,type} = this.props

      console.log('name:',name)
      console.log('type:',type)

      return (
                <List name={name} type={type} list={list}/>
        );
    }


}


export default MarvelGrid;
