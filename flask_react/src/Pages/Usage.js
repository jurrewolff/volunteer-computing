import React from 'react'; // niet per se nodig nu, toekomst wss wel


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PermanentDrawerLeft from '../Components/SideMenu';


const Usage = () => {
  return (
    <>
    <PermanentDrawerLeft />
    <Grid
            justifyContent="center"
            alignItems="center"
        // sx={{ pl: 10, pr: 10 }}
        >
            <Grid
                container
                id="top"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ pt: 10 }}
            >
                <Grid item xs={8} sx={{ pb: 5 }}>
                    <Box sx={{ pr: 20, pl: 10 }}>
                        <Toolbar />
                        <Typography
                            id="Top" variant="h3" gutterBottom component="div"
                        >
                            Specifications for researcher usage
                        </Typography>
                        <Typography sx={{ pb: 3 }} >
                        {/* <ul> */}
        <li> You must provide a file of C source code with a main(). </li>
        <li> Your program must receive its input through argv[]. </li>
        <li> Your program must give its output through stdout. </li>
        <li> Your program can receive multiple arguments per run but can only provide a single line of output, terminated by a a newline. </li>
        <li> You must provide input through a text file, each line contains all the arguments given to a single run of the program. </li>
        <li> If you provide multiple arguments, seperate them by spaces. </li>
        <li> The C standard library is supported, other libraries aren't. </li>
      {/* </ul> */}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
          </Grid>


    {/* <div style={{ width: "80%", height: "100px", marginTop: "5%", marginBottom: "3%", marginLeft: "100px" }}>
      <h1>Specifications for researcher usage</h1>
      <ul>
        <li> You must provide a file of C source code with a main(). </li>
        <li> Your program must receive its input through argv[]. </li>
        <li> Your program must give its output through stdout. </li>
        <li> Your program can receive multiple arguments per run but can only provide a single line of output, terminated by a a newline. </li>
        <li> You must provide input through a text file, each line contains all the arguments given to a single run of the program. </li>
        <li> If you provide multiple arguments, seperate them by spaces. </li>
        <li> The C standard library is supported, other libraries aren't. </li>
      </ul>
    </div> */}
    </>
  );
};
  
export default Usage;

// Dit gaat meer over dat de informatie ergens bestaat dan dat het een goede pagina is TODO: verbeter de pagina
