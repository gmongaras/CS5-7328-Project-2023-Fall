import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import AuthService from '../../services/auth';
const UserDataPage: React.FC = () => {
  const [nbRows, setNbRows] = React.useState(3);
  const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  const addRow = () => setNbRows((x) => Math.min(100, x + 1));

  const dummyData = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 40 },
    // Add more rows as needed
  ];

  // dummy data table
  const {data} = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 40 },
    // Add more rows as needed
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button size="small" onClick={removeRow}>
          Remove a row
        </Button>
        <Button size="small" onClick={addRow}>
          Add a row
        </Button>
      </Stack>
      <DataGrid autoHeight {...data} rows={data.rows.slice(0, nbRows)} />
    </Box>
  );
};

export default UserDataPage;
