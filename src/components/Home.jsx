// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from the external API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <Container>
      <h2>Employee Dashboard</h2>
      <Grid container spacing={3}>
        {employees.map((employee) => (
          <Grid item key={employee.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: 'teal', // Change the card background color to teal
                color: 'white', // Change the text color to white
                minHeight: '200px', // Adjust the height as needed
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {employee.name}
                </Typography>
                <Typography color="textSecondary">{employee.designation}</Typography>
                <Typography color="textSecondary">{employee.location}</Typography>
                <Typography variant="body2" component="p">
                  Salary: {employee.salary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
