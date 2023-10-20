// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { DataGrid, GridColDef} from '@mui/x-data-grid';
// import userService from '../../services/userQuery';
// import {Typography, Container, Box } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';


// // Note to self: use Collapsible table next time: https://mui.com/components/data-grid/rendering/#collapsible-table
// const UserDataPage: React.FC = () => {
//   //eslint-disable-next-line
//   const [rows, setRows] = useState<any[]>([]);
//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', description: 'Order of Creation', width: 70 },
//     { field: 'smuNo', headerName: 'SMU No.', width: 130 },
//     { field: 'username', headerName: 'Username', width: 130 },
//     { field: 'email', headerName: 'Email', width: 130 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     { field: 'password', headerName: 'Password', width: 130 },
//     { field: 'resetToken', headerName: 'Reset Token', width: 130 },
//     { field: 'resetTokenExpiry', headerName: 'Reset Token Expiry', width: 130 },
//     { field: 'updatedAt', headerName: 'Updated At', width: 130 },
//   ];


//   // Load all user data from the backend when the component mounts
//   useEffect(() => {
//     const getAllUserData = async () => {
//       try {
//         const response = await userService.getAllUsersData();
//         setRows(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getAllUserData(); // Call the function to load data
//   }, []); // Empty dependency array ensures this effect runs once on component mount

  

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '00px' }}>
//         <Typography component="h1" variant="h5">
//           User Data
//         </Typography>
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//           />
//         </div>
//       </Box>
//     </Container>
//   );
// };

// export default UserDataPage;

import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import userService from '../../services/userQuery';
import { Typography, Container, Box } from '@mui/material';

const UserDataPage: React.FC = () => {
  /* eslint-disable */
  const [rows, setRows] = useState<any[]>([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', description: 'Order of Creation', width: 70 },
    { field: 'smuNo', headerName: 'SMU No.', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'resetToken', headerName: 'Reset Token', width: 130 },
    { field: 'resetTokenExpiry', headerName: 'Reset Token Expiry', width: 130 },
    { field: 'updatedAt', headerName: 'Updated At', width: 130 },
  ];

  // useEffect(() => {
  //   const getAllUserData = async () => {
  //     try {
  //       // Replace userService with your actual service call
  //       const response = await userService.getAllUsersData();
  //       setRows(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getAllUserData();
  // }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '00px' }}>
        <Typography component="h1" variant="h5">
          User Data
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Box>
    </Container>
  );
};

export default UserDataPage;

