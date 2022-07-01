/*
 * USAGE PAGE
 * Information page regarding the website, including the
 * roles and expectations of volunteers and researchers.
 */
import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import PermanentDrawerLeft from "../Components/SideMenu";

const Usage = () => {
  return (
    <>
      <PermanentDrawerLeft />
      <Grid justifyContent="center" alignItems="center">
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
              <Typography variant="h3" gutterBottom component="div">
                Volunteer
              </Typography>
              <Typography sx={{ pb: 3 }}>
                Thank you for making your computer available to help science.
                You make scientific studies faster, cheaper and more accurate.
                Scientists are you very grateful. On your dashboard you will see
                several options:
                <li>
                  {" "}
                  Projects: Here you can choose which research you want to
                  participate in. This can be done on the basis of a description
                  and a title of a study. When the button start computing is
                  pressed, a new tab opens on which the program is run. It is
                  important that your browser supports javascript. The code is
                  not checked in this version of the website yet, so running it
                  is at your own risk.{" "}
                </li>
                <li>
                  {" "}
                  Past Projects: Here you can view the programs in which you
                  have participated. Several stats are shown here about your
                  contributions to a project.{" "}
                </li>
                <li>
                  {" "}
                  Scoreboard: Shows a ranking of the best. This ranking is
                  determined on the basis of two parameters. Which users are
                  best trusted and which users spend the longest time executing
                  programs. Are you able to get in?{" "}
                </li>
              </Typography>

              <Typography variant="h3" gutterBottom component="div">
                Researcher
              </Typography>
              <Typography sx={{ pb: 3 }}>
                Thank you for using our website. We try to link your research to
                volunteers so that your research is completed faster and you can
                get started with the analysis. On your navigation bar, you will
                see several options to choose from:
                <li>
                  {" "}
                  Projects: Here you can choose to participate in another
                  research or your own. This can be done on the basis of a
                  description and a title of a study. When the start computing
                  button is pressed, a new tab opens where the program is run.
                  It is important that your browser supports javascript. The
                  code has not yet been verified in this version of the website,
                  so running it is at your own risk.
                </li>
                <li>
                  {" "}
                  Past Projects: Here you can view the programs in which you
                  have participated. Several stats are shown here about your
                  contributions to a project.{" "}
                </li>
                <li>
                  {" "}
                  Dashboard: Shows a ranking of the best. This ranking is
                  determined on the basis of two parameters. Which users are
                  best trusted and which users spend the longest time executing
                  programs. Are you able to get in?{" "}
                </li>
                <li>
                  {" "}
                  Results: Here you see your projects that you want to have
                  carried out. The project name, amount of time ran, percentage.
                </li>
                <li>
                  {" "}
                  New Project: A project can be uploaded here. See the text
                  below for requirements of the .C file and explaination about
                  what the parameters are.{" "}
                </li>
              </Typography>

              <Typography variant="h3" gutterBottom component="div">
                Specifications for researcher usage
              </Typography>
              <Typography sx={{ pb: 3 }}>
                <li>
                  {" "}
                  You must provide a file of C source code with a main().{" "}
                </li>
                <li> Your program must receive its input through argv[]. </li>
                <li> Your program must give its output through stdout. </li>
                <li>
                  {" "}
                  Your program can receive multiple arguments per run but can
                  only provide a single line of output, terminated by a a
                  newline.{" "}
                </li>
                <li>
                  {" "}
                  You must provide input through a text file, each line contains
                  all the arguments given to a single run of the program.{" "}
                </li>
                <li>
                  {" "}
                  If you provide multiple arguments, seperate them by spaces.{" "}
                </li>
                <li>
                  {" "}
                  The C standard library is supported, other libraries aren't.{" "}
                </li>
              </Typography>

              <Typography variant="h3" gutterBottom component="div">
                Field Explanation
              </Typography>
              <Typography sx={{ pb: 3 }}>
                <li>
                  {" "}
                  Project Name: The name of the project. This and the project
                  description is what needs to confince the volunteer to choose
                  youre research to help.
                </li>
                <li>
                  {" "}
                  Project Description: Give a brief description of your project.
                </li>
                <li>
                  {" "}
                  Random Validation: You can choose yes or no. If there is
                  choosen to use random validation. The project results will
                  randomly validated.{" "}
                </li>
                <li>
                  {" "}
                  Amount of people: Here the amount of people which agree on a
                  result needs te be determined. We recommond a low number
                  because otherwise it could take a while to be finished.
                </li>
                <li>
                  {" "}
                  Trust Level: The minimum trust level te be able to validate
                  results. The trust level is implementend with inspiration from
                  the BOINC algorithm.{" "}
                </li>
                <li>
                  {" "}
                  Upload .C file: Upload a C file with the requirements given in
                  the "Specifications for researcher usage" section.
                </li>
                <li>
                  {" "}
                  Upload input: Upload a input file with the requirements given
                  in the "Specifications for researcher usage" section.
                </li>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Usage;
