import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AuthService from '../../services/auth';
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


// Note to self: use Collapsible table next time: https://mui.com/components/data-grid/rendering/#collapsible-table
const UserDataPage: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order', description: 'Order of Creation', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'smuId',
      headerName: 'ID',
      type: 'number',
      width: 130,
    },
    {
      field: 'password',
      headerName: 'Password',
      description: 'Email of the user',
      sortable: false,
      width: 160,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'Email of the user',
      sortable: false,
      width: 160,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'Phone number of the user',
      sortable: false,
      width: 160,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', smuId: 35, password: 'password', email: 'a', phone: 'b' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', smuId: 42, password: 'password', email: 'a', phone: 'b'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', smuId: 45, password: 'password', email: 'a', phone: 'b'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', smuId: 16 , password: 'password', email: 'a', phone: 'b'},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', smuId: null, password: 'password', email: 'a', phone: 'b'},
    { id: 6, lastName: 'Melisandre', firstName: null, smuId: 150, password: 'password', email: 'a', phone: 'b'},

  ];
  
  // grab user data from backend using axios and set rows and columns

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '00px'}}>
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
