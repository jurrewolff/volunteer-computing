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
                          variant="h3" gutterBottom component="div"
                        >
                        Volunteer
                        </Typography>
                        <Typography sx={{ pb: 3 }} >
                        Thank you for making your computer available to help science. You make scientific studies faster, cheaper and more accurate. Scientists are you very grateful.
                        On your dashboard you will see several options:
                        {/* <ul> */}
                          <li> Projects: Here you can choose which research you want to participate in. This can be done on the basis of a description and a title of a study. When the button start computing is pressed, a new tab opens on which the program is run. It is important that your browser supports javascript. The code is not checked in this version of the website yet, so running it is at your own risk. </li>
                          <li> Past Projects: Here you can view the programs in which you have participated. Several stats are shown here about your contributions to a project. </li>
                          <li> Scoreboard: Shows a ranking of the best. This ranking is determined on the basis of two parameters. Which users are best trusted and which users spend the longest time executing programs. Are you able to get in? </li>
                        {/* </ul> */}
                        </Typography>
                        <Typography
                          variant="h3" gutterBottom component="div"
                        >
                        Researcher
                        </Typography>
                        <Typography sx={{ pb: 3 }} >
                        Thank you for using our website. We try to link your research to volunteers so that your research is completed faster and you can get started with the analysis. On your navigation bar, you will see several options to choose from:
                        {/* <ul> */}
                          <li> Projects: Here you can choose to participate in another research or your own. This can be done on the basis of a description and a title of a study. When the start computing button is pressed, a new tab opens where the program is run. It is important that your browser supports javascript. The code has not yet been verified in this version of the website, so running it is at your own risk.</li>
                          <li> Past Projects: Here you can view the programs in which you have participated. Several stats are shown here about your contributions to a project. </li>
                          <li> Dashboard: Shows a ranking of the best. This ranking is determined on the basis of two parameters. Which users are best trusted and which users spend the longest time executing programs. Are you able to get in? </li>
                          <li> Results: Here you see your projects that you want to have carried out. The project name, amount of time ran, percentage.</li>
                          <li> New Project: A project can be uploaded here. See the text below for requirements of the .C file and explaination about what the parameters are. </li>
                        {/* </ul> */}
                        </Typography>
                        <Typography
                            variant="h3" gutterBottom component="div"
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
