import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import LoadingScreen from './LoadingScreen';

export default function Page() {

  //const URL = "https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps"; - MockAPI data
  //const URL = "https://localhost:7049/api/people"; //- Local .NET API
  const URL = "https://peopleapi1141.azurewebsites.net/api/people"; // - Online Azure Hosted .NET API
  const [apiData, SetApiData] = useState([]);

  //Using normal Fetch javascript
  // useEffect(() => {
  // fetch(URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     SetApiData(data)
  //   })
  //   .catch(error => {
  //     console.log("Something is wrong:" + error);
  //   });
  // },[]);

  //Using Axios methods to get API
  useEffect(() => {
      axios
      .get(URL)
      .then(response => response.data)
      .then(test => SetApiData(test))
      .catch(error => {console.log("Something is wrong:" + error);})
  },[]);

  if(apiData.length===0){
    return <LoadingScreen/>
}

  return (
    <div className='page'>

      {apiData.map((test) => (
        <Card key={test.id} className='card' sx={{ maxWidth: '70%' }}>
          <CardMedia
            sx={{ height: 300 }}
            image={test.image}
            title={test.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {test.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {test.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {test.job}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><Link>Share</Link></Button>
            <Button size="small"><Link to={`/Details/${test.id}`}>Detail</Link></Button>
          </CardActions>
        </Card>
      ))}

    </div>
  )
}
