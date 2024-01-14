import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
import "./../App.css";

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <h3 className='profile'>Please login!!</h3>

    return <h3 className='profile'>Welcome {user.username}</h3>
}

export default Profile