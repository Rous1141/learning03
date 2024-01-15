import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Page() {
  //const URL = "https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps";
  //const URL = "https://localhost:7042/api/TodoItems";
  const URL = "https://localhost:7049/api/people";
  const [apiData, SetApiData] = useState([]);

  useEffect(() => {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      SetApiData(data)
    })
    .catch(error => {
      console.log("Something is wrong:" + error);
    });
  },[]);

  return (
    <div className='page'>

      {apiData.map((data) => (
        <Card className='card' sx={{ maxWidth: '70%' }}>
          <CardMedia
            sx={{ height: 300 }}
            image={data.image}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.job}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}

    </div>
  )
}
