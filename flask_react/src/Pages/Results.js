// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { makeStyles } from '@mui/styles';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import PermanentDrawerLeft from '../Components/SideMenu';
// import ResponsiveAppBar from '../Components/Navbar'


// // const readResults = ({ data }) => {

// //   return data.map((project) =>


// //   );
// // }

// function createData(Title, Time_run, Date, Description, Project_id) {
//   return {
//     Title,
//     Time_run,
//     Date,
//     Description,
//     Project_id
//   };
// }


// let rows = [
//   // createData('Frozen yoghurt', 159, 6.0,),
//   // createData('Ice cream sandwich', 237, 9.0, 37),
//   // createData('Eclair', 262, 16.0, 24),
//   // createData('Cupcake', 305, 3.7, 67),
//   // createData('Gingerbread', 356, 16.0, 49),
// ];

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   const handleDownload = () => {
//     // Download request
//   }

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.Title}
//         </TableCell>
//         <TableCell align="left">{row.Time_run}</TableCell>
//         <TableCell align="left">{row.Date}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 2 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 More info
//               </Typography>
//               <Typography>
//                 {row.Description}
//               </Typography>
//               <Grid
//                 container
//                 direction="row"
//                 justifyContent="space-between"
//                 alignItems="center"
//               >
//                 <Grid>
//                   <IconButton
//                     aria-label="delete"
//                     size="large"
//                     onClick={() => handleDownload(row.Project_id)}
//                   >
//                     <DeleteIcon fontSize="inherit" />
//                   </IconButton>
//                 </Grid>
//                 <Grid>
//                   <Button
//                     // id={row.Project_id}
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2.5, ml: 1, mr: 2 }}
//                     onClick={() => handleDownload(row.Project_id)}
//                   >
//                     Download
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     Time_run: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     Date: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     Title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default function CollapsibleTable() {
//   const [data, setData] = React.useState([{}]);

//   React.useEffect(() => {
//     fetch("/projects")
//       .then(res => res.json())
//       .then(data => {
//         setData(data)
//         console.log(data)
//       })
//   }, []);

//   const readResults = ({ data }) => {

//     return data.map((project) =>
//       // rows.push(createData(project.name, project.time_run, project.date, project.description, project.id))
//       console.log(project)
//     );
//   }
//   return (
//     <>
//       <ResponsiveAppBar />
//       <PermanentDrawerLeft />
//       <Box
//         border="dashed"
//         component="main"
//         sx={{
//           pl: 45,
//           flexGrow: 1,
//           height: '100vh',
//           overflow: 'auto',
//         }}
//       >
//         {readResults({ data })}
//         <TableContainer component={Paper} style={{ width: '80%' }}>
//           <Table aria-label="collapsible table">
//             <TableHead>
//               <TableRow>
//                 <TableCell />
//                 <TableCell>Title </TableCell>
//                 <TableCell align="left">Time run</TableCell>
//                 <TableCell align="left">Date&nbsp;</TableCell>
//                 {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                 <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <Row key={row.Title} row={row} />
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </>
//   );
// }



import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Results() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  let user_cookie = Cookies.get("user_id")


  useEffect(() => {
    if (!user_cookie) {
      console.log("User not logged in, results page restricted")
      return navigate('/login')
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'user_id': user_cookie
      }
    };

    fetch("/api/results", requestOptions)
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, [true]);


  const downloadResultFile = (event, value) => {
    console.log(event)
    console.log(value)
    fetch('/api/download/' + value)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'my_results.txt';
          a.click();
        });
      });

  }


  // Returns all projects displayed in a card per project.
  const readResults = ({ data }) => {

    return data.map((project) =>

      <Row key={"result" + project.project_id} className="mb-3" style={{ width: "80%", height: "100px", marginTop: "5%", marginBottom: "3%", marginLeft: "100px" }}>
        <Col>
          <Card style={{ backgroundColor: '#7BD2EC' }}>
            <Row>
              <Col style={{ margin: "3%" }}>
                <h2>{project.name}</h2>
              </Col>
              <Col style={{ margin: "4%" }}>
                <Link to={"/moreInfo/" + project.project_id}>More info</Link>
              </Col>
              <Col style={{ margin: "3%" }}>
                Time run: 12:10:59
              </Col>
              <Col style={{ margin: "3%" }}>
                Correct
              </Col>

            </Row>
          </Card>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} style={{ marginTop: "3%" }}>
          <Button onClick={event => downloadResultFile(event, project.project_id)}>Download</Button>
        </Col>
      </Row>
    );
  }

  return (
    <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
      {readResults({ data })}
    </Container>
  );
};