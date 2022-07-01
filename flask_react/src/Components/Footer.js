/*
 * FOOTER PAGE.
 * Renders the footer of the homepage.
 */

// Material-UI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

// FOOTER
export default function Footer() {
  return (
    <Box backgroundColor={"black"} sx={{ p: 5 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        display="flex"
        rowSpacing={1}
        alignItems="flex-start"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pb: 4 }}
      >
        <Grid item xs={2}>
          {/* Footer text for account information */}
          <Typography color="common.white">
            {/* Footer text account information */}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2}></Grid>
        {/* Footer text for contact information */}
        <Grid item xs={2}>
          <Typography variant="h6" color="common.white">
            Contact
          </Typography>
          <Typography color="common.white">pse@pse.nl uva</Typography>
        </Grid>
      </Grid>
      {/* Copyright text */}
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="caption" color="common.white">
          Copyright © Groep G
        </Typography>
      </Grid>
    </Box>
  );
}
