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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    //Get The PUT API and update
    const [name,Setname] = useState()
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
    const HandleOnChange = () =>{

    }

    const HandleClick = () => {
        
    }
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update The Character
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    defaultValue = {person.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
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

            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.job}</p>
        </div>
    );
}