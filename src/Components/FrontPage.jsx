import React from 'react'
import {Link} from 'react-router-dom';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        borderColor: 'blue', // Change border color on hover
      },
    },
  });
  
  const StyledLink = ({ to, children }) => {
    return (
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        {children}
      </Link>
    );
  };
export default function FrontPage() {
    const classes = useStyles();
  return (
    <Container sx={{marginTop:"10%"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <StyledLink to="/admin">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Admin
                </Typography>
                <Typography color="textSecondary">
                  Click here to access admin panel
                </Typography>
              </CardContent>
            </Card>
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledLink to="/mod">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Moderator
                </Typography>
                <Typography color="textSecondary">
                  Click here to access moderator panel
                </Typography>
              </CardContent>
            </Card>
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledLink to="/characters">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Characters
                </Typography>
                <Typography color="textSecondary">
                  Click here to view characters
                </Typography>
              </CardContent>
            </Card>
          </StyledLink>
        </Grid>
      </Grid>
    </Container>
  )
}
