// src/components/EmployeeForm.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onSubmit(formData);
    // Additional logic if needed (e.g., reset the form)
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'beige',
        color: 'teal',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography component="h1" variant="h5">
          Employee Form
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="designation"
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="location"
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="salary"
          label="Salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: 'teal', color: 'white' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default EmployeeForm;
