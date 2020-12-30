import './App.css';
import {
  Container,
  Box,
  Radio,
  Paper,
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5)
  },
}));

function App() {
  const classes = useStyles();
  const [gender, setGender] = useState("")
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" p={3} mx="auto">
        <Box component="form">
          <FormControl >
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup value={gender} onChange={handleChange} row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
             
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
