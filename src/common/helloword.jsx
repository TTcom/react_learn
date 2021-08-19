import {Component} from 'react'

class Helloword extends Component{
    static defaultProps = {
        title:'apeople'
    }
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
      return (
        <div>
            <div>{this.props.title}</div>
          Helloword
        </div>  
      ) 
      
    }
}
export default Helloword