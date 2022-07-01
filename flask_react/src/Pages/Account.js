/*
 * ACCOUNT PAGE.
 * Displays the account information of the user.
 * If the roll of the user is volunteer, the user is provided the choice to
 * apply for the scientist roll.
 */

// Package and functionality imports
import Cookies from "js-cookie";
import { theme } from "../Components/Theme";
import { useEffect, useState } from "react";
import PermanentDrawerLeft from "../Components/SideMenu";
import { ThemeProvider } from "@material-ui/core/styles";

// Material ui imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Account() {
  const paperStyle = { padding: 20, width: "80%" };
  const [user, setUser] = useState({});

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        username: Cookies.get("name"),
      },
    };

    fetch("/api/userdata", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setUser(result.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PermanentDrawerLeft />
      <Grid
        container
        direction="column"
        sx={{ mt: -8, pl: 30 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item alignItems="center" justifyContent="center">
          <Typography variant="h3">Account setting</Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              pl: 8,
            }}
          >
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                elevation={10}
                style={paperStyle}
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Grid>Username: {user.username}</Grid>
              </Paper>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
