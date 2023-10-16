import React, { useState, useEffect } from 'react';
import { Typography, Container, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

// Import the backend functions for fetching user data
import {
  getUsers,
  getUserById,
  findUserByUsername,
  getUserDetailById,
} from REACT_APP_BACKEND_URL+'/modules/users''; 
// Replace './api' with the actual path to your backend functions

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    // Make an API request to fetch the user data from the backend
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container maxWidth='sm'>
      {users ? (
        <div>
          <Typography variant='h1'>Users</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                {/* Add more table headers for other user properties */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  {/* Render other user properties in additional TableCell components */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Typography variant='h1'>Loading...</Typography>
      )}
    </Container>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import { Typography, Container } from '@mui/material';

// interface User {
//   username: string;
//   // other user properties...
// }

// const Home: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
//     setUser(currentUser);
//   }, []);

//   return (
//     <Container maxWidth='sm'>
//       {user ? (
//         <Typography variant='h1'>Welcome back, {user.username}!</Typography>
//       ) : (
//         <Typography variant='h1'>Please log in.</Typography>
//       )}

//     </Container>
//   );
// };

// export default Home;

