/*
 * NOPAGE PAGE.
 * This page is displayed to the user when the user tries to go to a page which
 * does not exist on our website.
 */

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NoPage = () => {
  return (
    <Box>
      <Box
        border="dashed"
        component="main"
        sx={{
          pl: 30,
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{}}>
          <h1>You have tried to access a non-existent page.</h1>
        </Container>
      </Box>
    </Box>
  );
};

export default NoPage;
