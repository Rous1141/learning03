import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  axios  from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PeopleDetail() {
    const [person,SetPerson] = useState([]);
    const [open,SetOpen] = useState(false);
    const [loading,SetLoading] = useState(true);
    let {id} = useParams();
    //const URL = "https://localhost:7049/api/people/" + id; //- Local .NET API
    const URL = "https://peopleapi1141.azurewebsites.net/api/people/" + id;
    const navigate = useNavigate();

    const redirect = () =>{
      navigate("/");
    }
    useEffect(()=>{
        axios
        .get(URL)
        .then(response => response.data)
        .then(data => {SetPerson(data);SetLoading(false)})
        .catch(error => console.log('Something is wrong: ' + error))
    },)
    if(loading){
      return <LoadingScreen/>
  }

    const handleClick = (event) => {
      SetOpen(true)
      event.preventDefault();
    }
    const handleClose = (event) => {
      SetOpen(false)
      event.preventDefault();
    }

    const handleSubmit = (event) => {
      try{
        axios.delete(URL)
        .then(response => {console.log("Delete Complete!",response.data)})
        .then(redirect);
        
      }catch(error){
        console.log(error)
      }
    }

    if(person.id==null){
      return <LoadingScreen/>
  }
  return (
    <div className='page'>
        <Card key={person.id} className='card' sx={{ maxWidth: '70%' }}>
          <CardMedia
            sx={{ height: 300 }}
            image={person.image}
            title={person.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.job}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={`/`}>Return Home</Link></Button>
            <Button size="small"><Link to={`/Update/${person.id}`}>Update Detail</Link></Button>
            <Button onClick={handleClick} sx={{color:"red"}} size="small">Delete</Button>
          </CardActions>
        </Card>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Character Deletion?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Want To DELETE the Character?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={{color:"red"}} onClick={event => handleSubmit(event)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
