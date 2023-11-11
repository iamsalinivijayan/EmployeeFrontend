// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function App() {
  const [employees, setEmployees] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   designation: '',
  //   location: '',
  //   salary: '',
  // });

  const handleFormSubmit = (data) => {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
  };

  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: 'teal' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/employee-form">
            Employee Form
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home employees={employees} />}
          />
          <Route
            path="/employee-form"
            element={<EmployeeForm onSubmit={handleFormSubmit} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
