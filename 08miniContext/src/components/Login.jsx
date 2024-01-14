import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
import "./../App.css"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='login'>
        <h2>Login</h2>
        <div className="input">
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='Username'  required/>
        </div>
        <div className="input">
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='Password'  required/>
        </div>
        <div className='btn'>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login