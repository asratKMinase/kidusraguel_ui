import React from "react";
import { Container, Grid, Box, Link, Avatar } from "@mui/material";
import  Image from '../../dhkrlogo.jpg';



const Footer = () => {
    return ( 
        <>
            <footer>
                <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"  justifyContent="bottom">
                    <Container maxWidth="lg">
                        <Grid container spacing={7}>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}> Information</Box>
                                <Box>
                                <br></br>
                                    <Link href="/contactUs" color="inherit" underline ="hover">
                                        Address
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    History
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Privacy
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}> Services</Box>
                                <br></br>
                                <Box>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Weekly Service
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Kidase
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Education
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Song
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>Future Plan</Box>
                                <br></br>
                                <Box>
                                    <Link href="/" color="inherit" underline ="hover">
                                        Payment
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    Construction Expansion
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    career
                                    </Link>
                                </Box>
                                <Box>
                                <br></br>
                                    <Link href="/" color="inherit" underline ="hover">
                                    News
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box alignItems="center">
                            <br></br>
                            <br></br>
                        <center>
                            <Avatar
                                alt="Remy Sharp" 
                                src={Image}
                                    sx={{ width: 150, height: 150 }} />
                        </center>
                         </Box>
                        <Box textAlign="center" pt={{ xs: 3, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        Autsin St. Raguel ETOC &reg; {new Date().getFullYear()}
                        </Box>
                    </Container>
                </Box>
            </footer>
        </>
     );
}
 
export default Footer;