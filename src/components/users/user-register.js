import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import Box from '@mui/material/Box';



const UserRigster = () => {
    const usernameInput = useRef();
    const passwordInput = useRef();
    const fnameInput = useRef();
    const mitialInput = useRef();
    const lnameInput = useRef();
    const knameInput = useRef();
    const genderInput = useRef();
    const phoneInput = useRef();
    const dobInput = useRef();
    const rdateInput = useRef();
    const emailInput = useRef();

    const url = "http://localhost:9009";

    async function Register() {
        const users = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            fname: fnameInput.current.value,
            mitial: mitialInput.current.value,
            lname: lnameInput.current.value,
            kname: knameInput.current.value,
            gender: genderInput.current.value,
            phone: phoneInput.current.value,
            dob: dobInput.current.value,
            rdate: rdateInput.current.value,
            email: emailInput.current.value
          
        };

        try {
            const response = await axios.post(`${url}/users/register`, users);
            console.log(response)
        } catch (e) {
            console.log("Here is the cathc")
        }

    }

    return ( 
        <>
            <center>
                <h1>Please register here</h1>
                <Grid item xs={12} sm={4}>
                <Box>
            <output>Username: </output>
            <input  placeholder="username" label="username" variant="outlined" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <output>Password: </output>
            <input  type="password" placeholder="password" label="Username" variant="outlined"  ref={passwordInput}></input>
            <br></br>
            <br></br>
            <output>First Name: </output>
            <input  placeholder="First Name " label="First Name" variant="outlined" ref={fnameInput}></input>
            <br></br>
            <br></br>
            <output>M. Initial: </output>
            <input  placeholder="middle intial" label="Username" variant="outlined"  ref={mitialInput}></input>
            <br></br>
                    <br></br>
                   
            <output>Last Name: </output>
            <input  placeholder="Last Name" label="Last Name" variant="outlined" ref={lnameInput}></input>
            <br></br>
            <br></br>
            <output>Kirstna Name: </output>
            <input  placeholder="Kirstina Name" label="Kirstina Name" variant="outlined"  ref={knameInput}></input>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box>
                    <br></br>
            <br></br>
            <output>Gender:: </output>
            <input  placeholder="gender" label="Gender" variant="outlined" ref={genderInput}></input>
            <br></br>
            <br></br>
            <output>Phone Number: </output>
            <input placeholder="phone" label="Phone Number" variant="outlined"  ref={phoneInput}></input>
            <br></br>
            <br></br>
            <output>Dob: </output>
            <input placeholder="dob" label="Dob" variant="outlined"  ref={dobInput}></input>
            <br></br>
            <br></br>
            <output>Registeration Date: </output>
            <input placeholder="Rigistration Date" label="Rigistration Date" variant="outlined"  ref={rdateInput}></input>
            <br></br>
            <br></br>
            <output>Email: </output>
            <input placeholder="email" label="Email" variant="outlined"  ref={emailInput}></input>
            <br></br>
                        <br></br>
                        </Box>
            </Grid>   
            <Button variant='contained' onClick={Register}>Register</Button>
            </center>
        </>
     );
}
 
export default UserRigster;