
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import MediaCard from '../layout1/crads';
import MediaControlCard from '../layout1/crads';
import UserLogin from '../users/user-login';
import UserRigster from '../users/user-register';
import Welcome from '../welcome/main-page';
import ImageSlider from './image-slider';

const Slider = () => {


    const slides = [
      { url: "http://localhost:9009/picture/dhkidusraguel.png", title: "P1" },
      { url: "http://localhost:9009/picture/dhkragueal1.jpg", title: "P2" },
      { url: "http://localhost:9009/picture/dhkraguel.jpg", title: "P3" },
      { url: "http://localhost:9009/picture/dhkrlogo.jpg", title: "P4" },

    ];
    const containerStyles = {
      width: "700px",
      height: "400px",
      margin: "0 auto"
    };
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={4} >
              <br></br>
              <br></br>
                <div style={containerStyles}>
                   <MediaCard/>
                </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <br></br>
              <br></br>
              <div style={containerStyles}>
                <ImageSlider slides={slides}/>
              </div>
              <br></br>
              <br></br>
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div >
              <MediaCard/>
              </div>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    );
  };
export default Slider;