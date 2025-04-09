import { useState } from 'react'  
import { Link, useNavigate } from 'react-router-dom'  
import './Signin.css'  

const Signin = () => {  
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")  
    const navigate = useNavigate()  

    const sendData = async (event) => {  
        event.preventDefault()  
        const data = { email, password }  

        try {  
            const response = await fetch('https://vica.website/api/login', {  
                method: 'POST',  
                headers: {  
                    "Accept": "application/json",  
                    "Content-Type": "application/json"  
                },  
                body: JSON.stringify(data)  
            })  
            const res = await response.json()  
            if (response.ok) {  
                localStorage.setItem("token", `Bearer ${res.token}`)  
                navigate("/dashboard")  
            } else {  
                console.error(res.message)  
            }  
        } catch (err) {  
            console.error(err)  
        }  
    }  

    return (  
        <div className='signin'>  
            <form onSubmit={sendData}>  
                <h1>Sign In</h1>  
                <p>Please enter your email and password to continue</p>  
                <div className="signinEmail">  
                    <label htmlFor="email">Email</label>  
                    <input  
                        type="email"  
                        placeholder='Email'  
                        onChange={(event) => setEmail(event.target.value)}  
                    />  
                </div>  
                <div className="signinPassword">  
                    <label htmlFor="password">Password</label>  
                    <input  
                        type="password"  
                        placeholder='********'  
                        onChange={(event) => setPassword(event.target.value)}  
                    />  
                </div>  
                <input  
                    type='submit'  
                    value="Sign In"  
                    className='submitInput'  
                />  
                <div className="signinInfo">  
                    <p>Don’t have an account?</p>  
                    <Link to={'signup'}>Sign up</Link>  
                </div>  
            </form>  
        </div>  
    )  
}  

export default Signin