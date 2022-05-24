import React, { Component } from 'react'
import Skeleton ,{ SkeletonTheme }from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Skelton.css'
import { Container,Row,Col } from 'react-bootstrap'
import NewCard from './NewCard'
import New from './New'


export class Skelton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
    }
    changeState=()=>{
        this.setState({loading:false})
        console.log(this.state.loading)
    }
    
    render() {
        return (
            <div className=''>
                {this.state.loading ? <NewCard/> :<New/> }
                 <button onClick={this.changeState}>Change</button>
                 
            </div>
        )
    }
}

export default Skelton
