import React from 'react'
import { fetchUser } from '../../Redux/User/UserActions'
import { useEffect } from 'react'
import { connect } from 'react-redux'

function Test( { userData,fetchUsers}) {
    useEffect(() => {
       fetchUsers()
    }, [])
    return userData.loading ? 
    (<h2>Loading</h2>): userData.error ? (
        <h2>{userData.error}</h2>
    ): (
        <div>
            <h2>UserList</h2>  
            <div>{
                userData &&
                userData.users &&
                userData.users.map(user => <p>{user.username}</p>)
                }</div>
        </div>
    )

       
    
}

const mapStateToprops = state =>{
    return{
        userData : state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers : ()=> dispatch(fetchUser())
    }
}

export default connect (mapStateToprops,mapDispatchToProps)(Test)