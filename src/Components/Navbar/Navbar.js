import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'



class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false
        }
    }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
   
    render() {
        
        return (
            <div>
                <div className='container1'>
                    <div className='logo-container'>
                 <Link to='/'>
                     <img src='logo.png' alt='logo' className='logo' onClick={this.handleClick}></img></Link>
                   
                </div>
                <div className='right-container'>
                <Link to='/search'> <i class="fas fa-search fa-lg"></i></Link>
                <div className="dropdown">
                                <img  src='user.png' alt='user-pic' className='user-pic'></img>
                                <div className="dropdown-content">
                                    <a> <Link to='/signin'>Sign in</Link></a>
                                    <hr className="m-0 p-0"></hr>
                                    <a> <img src='https://origin-staticv2.sonyliv.com/UI_icons/Subscribe_Now.png' className="imgSize" /> Subscribe Now</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a> <img src="https://origin-staticv2.sonyliv.com/UI_icons/New_Final_Icons_30052020/ActivateTV3x.png" className="imgSize" />Activate TV</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a> <img src="https://origin-staticv2.sonyliv.com/UI_icons/settings_icon.png" className="imgSize" />Settings & Perferences</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a> <img src="https://origin-staticv2.sonyliv.com/UI_icons/paymentscreenicons/Contact_Us_New_Icon3x.png" className="imgSize" />Contact Us</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a> <img src="https://originpreprod-static.sonyliv.com/activate/offer.png" className="imgSize" /> Activate Offer</a>
                                </div>
                            </div>
                </div>
                </div>
                <nav>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='nav-left'>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} onClick={this.handleClick}>
                       {
                           MenuItems.map((navitems,index) =>{
                            return <Link style={{textDecoration:"none",color:'white'}} to={navitems.url}><li className='list'  key={index}>{navitems.tittle}</li> </Link>
                           })
                       }
                    </ul>
                </div>
               
                </nav>
            </div>
        )
    }
}

export default Navbar