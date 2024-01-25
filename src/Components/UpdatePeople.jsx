import {React, useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Have to keep the MUI copyrights for now
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
// TODO remove, this demo shouldn't need to reset the theme.


export default function UpdatePeople() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
      event.preventDefault();
      setOpen(true);
    };
  
    const handleClose = (event) => {
      event.preventDefault();
      setOpen(false);
    };

    //Get The PUT API and update
    const [name,Setname] = useState();
    const [age,Setage] = useState();
    const [job,Setjob] = useState();
    const [image,Setimage] = useState();
     

    const [person,SetPerson] = useState([]);
    const {id} = useParams();
    const URL = "https://peopleapi1141.azurewebsites.net/api/people/" + id;
    useEffect (()=>{
    axios
    .get(URL)
    .then(response => response.data)
    .then(data => SetPerson(data))
    .catch(error => console.log(error))
    },)
    if(person.id==null){
        return <LoadingScreen/>
    }
      
    const handleSubmit = (event) =>{
        axios.put(URL,{
            id: person.id,
            name: name,
            age: age,
            job: job,
            image: image
        })
        .then(response => {console.log("Begin PUT method: ",response.data);})
        .catch(error => console.log(error))
        event.preventDefault(); 
        handleClose(event);
    }
    
    //To get a constant update of an variable, use function event => SetState(event.target.value)
    return (
        <div className='page'>
            <Container className='container' component="main" maxWidth="xs">
                <CssBaseline />
                
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <img alt='character' style={{objectFit:"fill"}} src = {person.image} ></img>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update The Character
                    </Typography>
                    <Box component="form" noValidate onSubmit={event => handleClickOpen(event)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    onChange={event => Setname(event.target.value)}
                                    defaultValue = {person.name}
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={event => Setage(event.target.value)}
                                    defaultValue = {person.age}
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="age"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={event => Setjob(event.target.value)}
                                    defaultValue = {person.job}
                                    required
                                    fullWidth
                                    id="job"
                                    label="Job"
                                    name="job"
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={event => Setimage(event.target.value)}
                                    defaultValue = {person.image}
                                    required
                                    fullWidth
                                    name="imageurl"
                                    label="Image URL"
                                    type="imageurl"
                                    id="imageurl"
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                
                <Copyright sx={{ mt: 5 }} />
            </Container>

            <p>{name}</p>
            <p>{age}</p>
            <p>{job}</p>

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={event => handleSubmit(event)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}