import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CardContainer from './CardContainer'
import './search.css'
// import Cards from '../Common/Cards';


export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false,
            search: "",

        }
        this.ChangeHandler = this.ChangeHandler.bind(this)
    }


    ChangeHandler = (value) => {
        this.setState({ search: value })
        // this.filterData(value)
        this.performSearch();
    }

   
    componentDidMount() {
        this.performSearch();
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.search !== this.state.search){
            this.setState({posts:[]})
        }
    }

    performSearch = (query = this.state.search) => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => {
                console.log(response.data)
                this.setState({ posts: response.data })
                this.setState({ dataLoaded: true })
            })
            .catch(error => {
                this.setState({ error: "Endpoint is not correct" })

            })
    }





    render() {
        
        const { posts, dataLoaded, error, search } = this.state;
        console.log(search)
        return (
            <>
                <div style={{ backgroundColor: "inherit", paddingTop: "5px" }}></div>
                <div className='text-center margin-for-div-top d-flex' style={{backroundColor: "#11111"}}>
                    <div className='search-bar-wrapper'>
                        <input
                            type="search"
                            
                            value={search}
                            onChange={e => this.ChangeHandler(e.target.value)}
                            className='mobileInputSearch'

                        />
                    </div>
                    <div>
                        <Link to="/"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3e%3cpath d='M18.075 1L1 18.075M1 1l17.075 17.075' stroke='%23FFF' stroke-width='1.647' fill='none' stroke-linecap='round' stroke-linejoin='round' opacity='.8'/%3e%3c/svg%3e" class="close-icon close-search-icon" alt="close" /></Link>
                    </div>
                </div>
                <div className="row m-5" style={{backroundColor: "#11111"}}>
                    {dataLoaded ? posts.map((item, index) =>
                        <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                            <CardContainer key={index} data={item.show} />
                        </div>) : <div className="error">{error}</div>
                    }
                </div>
            </>
        )
    }
}



