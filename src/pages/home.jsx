import {Component} from 'react'
import Helloword from '../common/helloword'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div className="home">
                <Helloword></Helloword>
                home
            </div>
        ) 
    }
}

export default Home