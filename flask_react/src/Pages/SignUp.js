/*
 * SIGNUP PAGE.
 * The signup page. Utilizes the fetch api which is implemented in
 * the signupRequest file. First the user input is evaluated then the
 * signUprequest function is called. If sign up is succesful, user is
 * logged in automatically.
 */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupRequest } from "../Actions/signupRequest";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Signup() {
  {
    /* Styling of input field.*/
  }
  const paperStyle = { padding: 20, margin: "20px auto" };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  {
    /* Navigation function.*/
  }
  const navigate = useNavigate();

  {
    /* State variables for user and textfield.*/
  }
  const [pass, setPass] = useState("");
  const [inst, setInst] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [background, setBackground] = useState("");
  const [isScientist, setIsScientist] = useState("1");
  const [authenticated, setAuthenticated] = useState(false);
  const [clicked, setClicked] = useState(true);

  {
    /* 'XOR' toggle switch for selecting Scientist or Volunteer.*/
  }
  function clickIsScientist() {
    setClicked(true);
    setIsScientist("1");
  }
  function clickIsVolunteer() {
    setClicked(false);
    setIsScientist("0");
  }

  {
    /*
    Tracks the state of latter variables to update the status of input
    information. If user has filled in correct information, authenticated
    variable is set to true, and form can be submitted.
    */
  }
  useEffect(() => {
    if (
      uname !== "" &&
      email !== "" &&
      pass !== "" &&
      fname !== "" &&
      lname !== "" &&
      inst !== "" &&
      isScientist === "1"
    ) {
      setAuthenticated(true);
    }
    if (uname !== "" && email !== "" && pass !== "" && isScientist === "0") {
      setAuthenticated(true);
    }
  }, [uname, email, fname, pass, lname, inst, isScientist]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ pt: 8 }}
      >
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            elevation={10}
            style={paperStyle}
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Sign up
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Grid>
                  <TextField
                    required={isScientist}
                    disabled={isScientist == "0"}
                    margin="normal"
                    variant="outlined"
                    label={"First name"}
                    onChange={(e) => setFname(e.target.value)}
                    sx={{ mb: -1.5 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    required={isScientist}
                    disabled={isScientist == "0"}
                    margin="normal"
                    variant="outlined"
                    label="Last name"
                    onChange={(e) => setLname(e.target.value)}
                    sx={{ mb: -1.5 }}
                  />
                </Grid>

                <Grid>
                  <TextField
                    margin="normal"
                    disabled={isScientist == "0"}
                    variant="outlined"
                    label="Institution"
                    onChange={(e) => setInst(e.target.value)}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    margin="normal"
                    disabled={isScientist == "0"}
                    variant="outlined"
                    label="Background"
                    onChange={(e) => setBackground(e.target.value)}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    required
                    margin="normal"
                    variant="outlined"
                    label="Username"
                    onChange={(e) => setUname(e.target.value)}
                    sx={{ mb: -1.5 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    required
                    type="password"
                    id="password"
                    margin="normal"
                    variant="outlined"
                    label="Password"
                    onChange={(e) => setPass(e.target.value)}
                    sx={{ mb: -1.5 }}
                  />
                </Grid>
                <Grid>
                  <TextField
                    required
                    margin="normal"
                    variant="outlined"
                    label="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: -1.5 }}
                  />
                </Grid>
                <Grid>
                  <Grid>
                    {/*
                                            Import of SignupRequest, sends relevant information
                                            to that component.
                                        */}
                    <SignupRequest
                      username={uname}
                      pass={pass}
                      eMail={email}
                      fName={fname}
                      lName={lname}
                      inst={inst}
                      isResearcher={isScientist}
                      background={background}
                      authenticated={authenticated}
                    />
                    <Button
                      variant="contained"
                      onClick={() => navigate(-1)}
                      sx={{ mt: 3, mb: 2, ml: 1, mr: 2 }}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid>
                    <Link to="/login" variant="body2" sx={{ ml: 1 }}>
                      {"Already have an account? Login"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction={"column"}
                item
                xs={6}
                justifyContent="center"
                maxWidth="sm"
              >
                <Grid>
                  <Paper style={paperStyle}>
                    <Box>
                      <Typography variant="h4">Researcher</Typography>
                    </Box>
                    <Typography>
                      A Researcher is any person linked to an institution
                      wishing to make use of the computational power our site
                      provides.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Radio
                        {...label}
                        checked={clicked}
                        shape="round"
                        onChange={(e) => {
                          setIsScientist(e.target.value);
                          clickIsScientist();
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Box>
                  </Paper>
                </Grid>
                <Divider orientation="horizontal" />
                <Grid>
                  <Paper style={paperStyle}>
                    <Box>
                      <Typography variant="h4">Volunteer </Typography>
                    </Box>
                    <Typography>
                      A Volunteer is any person with adequate computing power
                      wanting to help Researchers process their data.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Radio
                        {...label}
                        checked={!clicked}
                        shape="round"
                        onChange={(e) => {
                          setIsScientist(e.target.value);
                          clickIsVolunteer();
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
