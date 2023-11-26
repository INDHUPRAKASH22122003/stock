import React ,{useState} from 'react'
import { Link} from 'react-router-dom'
import './Login.css'
// import { useDispatch } from "react-redux";
// import { login } from "./userSlice";
// import jwt_decode from 'jwt-decode'
// import axios from 'axios';
function Login() { 
    
    const [username,setUsername]=useState("");
    const [password, setPassword] = useState('');
    // const dispatch = useDispatch();
    // const navigate=useNavigate();

//   const[user,setUser]=useState({});
//   function handleCallbackResponse(response){
//     console.log("JWT ID token: "+response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById('signInDiv').hidden = true;
//     navigate('./Home');
//   }

//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//     dispatch(
//       login({
//        name:username
//       })
//       )
//     //   navigate('/home');
//   try{
//     const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
//         "name":username,
//         "password":password
//     });
//     navigate('/home');
//     let token=response.data.token;
//     let user=response.data.id;
//     localStorage.setItem('token',token);
//     localStorage.setItem('user',JSON.stringify(user));
// }
// catch(error){
//     window.alert("Incorrect Username or Password !!!");
// }
// }
    return (
        <body>
        <div className='back'>
        <center>
        <div className='make'>
        <div className="auto">
            <h2><b>Weclome to Stockiee</b></h2>
            <div className='logform'>
            <form>
                <p>
                    <label className='formslabel'>Username</label><br/>
                    <input  className="logi" type="text" placeholder="Enter your username" name="username" value={username} onChange={(event) => setUsername(event.target.value)}  required />
                </p>
                <p>
                    <label className='formslabel'>Password</label>
                    {/* <Link to="  "><label className="right-label">Forget password?</label></Link> */}
                    <br/>
                    <input className="logi" type="password" placeholder='Enter your password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                    <center><button id="sub_btn" type="submit">Login</button></center>
                </p>
            </form>
            </div>
            <footer>
                <p>First time? <Link className='makewhite' to="/register">Create an account</Link></p>
                {/* <p><Link className='makewhite' to="/">Back to Homepage</Link></p> */}
            </footer>
            </div>
        </div>
        </center>
        </div>
        </body>
    );
};
export default Login