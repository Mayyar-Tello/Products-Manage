import { useState } from 'react'  
import { Link, useNavigate } from 'react-router-dom'  
import './Signup.css'  

const Signup = () => {  
    const [first_name, setFirstName] = useState("")  
    const [last_name, setLastName] = useState("")  
    const [user_name, setUserName] = useState("")  
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")  
    const [password_confirmation, setPasswordConfirmation] = useState("")  
    const [profile_image, setProfileImage] = useState(undefined)  
    const [imgUrl, setImgUrl] = useState("./src/assets/img/ProfileImage.png")  
    const navigate = useNavigate()  

    const handleImageChangeEvent = (event) => {  
        const file = event.target.files[0]  
        setProfileImage(file)  
        if (file) {  
            const url = URL.createObjectURL(file)  
            setImgUrl(url)  
        }  
    }  

    const sendData = (event) => {  
        event.preventDefault()  
        const data = new FormData()  
        data.append("first_name", first_name)  
        data.append("last_name", last_name)  
        data.append("user_name", user_name)  
        data.append("email", email)  
        data.append("password", password)  
        data.append("password_confirmation", password_confirmation)  
        data.append("profile_image", profile_image)  
        fetch('https://vica.website/api/register', {  
            method: 'POST',  
            headers: {  
                "Accept": "application/json"  
            },  
            body: data  
        })  
        .then(res => res.json())  
        .then(res => {  
            localStorage.setItem("token", "Bearer " + res.data.token)  
            navigate("/dashboard")  
        })  
        .catch(err => console.log(err))  
    }  

    return (  
        <div className='signup'>  
            <form onSubmit={sendData}>  
                <h1>Sign Up</h1>  
                <p>Create an account to continue</p>  
                <div className="firstAndlast">  
                    <div className='firstNameSignupPage'>  
                        <label htmlFor="first_name">First Name</label>  
                        <input  
                            type="text"  
                            placeholder='First Name'  
                            onChange={(event) => setFirstName(event.target.value)}  
                        />  
                    </div>  
                    <div className='lastNameSignupPage'>  
                        <label htmlFor="last_name">Last Name</label>  
                        <input  
                            type="text"  
                            placeholder='Last Name'  
                            onChange={(event) => setLastName(event.target.value)}  
                        />  
                    </div>  
                </div>  
                <div className='userNameSignupPage'>  
                    <label htmlFor="user_name">User Name</label>  
                    <input  
                        type="text"  
                        placeholder='User Name'  
                        onChange={(event) => setUserName(event.target.value)}  
                    />  
                </div>  
                <div className='emailSignupPage'>  
                    <label htmlFor="email">Email</label>  
                    <input  
                        type="email"  
                        placeholder='Email'  
                        onChange={(event) => setEmail(event.target.value)}  
                    />  
                </div>  
                <div className="passwordAndConfirmation">  
                    <div className='passwordSignupPage'>  
                        <label htmlFor="password">Password</label>  
                        <input  
                            type="password"  
                            placeholder='********'  
                            onChange={(event) => setPassword(event.target.value)}  
                        />  
                    </div>  
                    <div className='passwordConfirmationSignupPage'>  
                        <label htmlFor="password_confirmation">Confirm</label>  
                        <input  
                            type="password"  
                            placeholder='********'  
                            onChange={(event) => setPasswordConfirmation(event.target.value)}  
                        />  
                    </div>  
                </div>  
                <div className='profileImageSignupPage'>  
                    <label htmlFor="profile_image">Profile Image</label>  
                    <input  
                        type="file"  
                        id="profile_image_input"  
                        onChange={handleImageChangeEvent}  
                    />  
                    <img src={imgUrl} alt="profile" onClick={() => document.getElementById("profile_image_input").click()} />  
                </div>  
                <input  
                    type="submit"  
                    value="Sign Up"  
                    className='submitInput'  
                />  
                <div className="signupInfo">  
                    <p>Already have an account?</p>  
                    <Link to={'/'}>Sign In</Link>  
                </div>  
            </form>  
        </div>  
    )  
}  

export default Signup