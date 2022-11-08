import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";
import { Button, Paper } from "@mui/material";

const styleObj = {
    fontSize: 25,
    color: "#4a44f1",
    textAlign: "center",
    paddingTop: "10px",
}

const UserLogin = () => {
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "http://localhost:9009/auth";
   
    async function login() {
        const users = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
        };

        if (users.password === "Guest") {
            alert("You need to reset password");
        } else {
            try {
                const response = await axios.post(`${url}`, users);
                console.log(response.data);
                console.log(users);
                setUser({ ...users, username: users.username});
                console.log(users); 
            } catch (error) {
                console.error(error.response.data);
            }
        }
    }
    return (  
        <>
         <center>
         
            <h4> Welcome, Please login here </h4>
            <div className="login">
            <input  placeholder="መለያ ስም" label="መለያ ስም" variant="outlined" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input id ="usernamePasswordInput" type="password" placeholder="የይልፍ ቃል" label="Username" variant="outlined"  ref={passwordInput}></input>
            <br></br>
            <br></br>
            </div>
            <Button variant='contained' onClick={login}>Login</Button>
      
            <Button variant='contained' onClick={() => navigate("/mainnavbar")}>Back</Button>
            <br></br>
            <br></br>
            <br></br>  
        
        </center>
        </>
    );
}
 
export default UserLogin;