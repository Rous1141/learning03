import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

export default function PeopleDetail() {
    const [person,SetPerson] = useState([]);
    let {id} = useParams();
    const URL = "https://peopleapi1141.azurewebsites.net/api/people/" + id;

    useEffect(()=>{
        axios
        .get(URL)
        .then(response => response.data)
        .then(data => SetPerson(data))
        .catch(error => console.log('Something is wrong: ' + error))
    },)

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
          </CardActions>
        </Card>
    </div>
  )
}
