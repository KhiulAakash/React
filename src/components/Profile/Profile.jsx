import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import "./style.css"

const Profile=()=>{
    const{user}=useContext(UserContext)
    return(
        <div className="Profile" style={{backgroundColor:user?"#242424":"white",color:user?"white":"black"}}>
            <h1>Profile</h1>
            <h3>Full Name: <span>{user.fullname}</span></h3>
            <h3>Email: <span>{user.email}</span></h3>
            <h3>Address: <span>{user.address}</span></h3>
        </div>
    )
}

export default Profile;