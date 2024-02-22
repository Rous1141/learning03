import React, { useState } from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import GoogleIcon from '@mui/icons-material/Google'; 
import Button from '@mui/material/Button';
import  axios  from 'axios';

interface User { 
  email:string
  email_verified:boolean
  family_name:string
  given_name:string
  locale:string
  name:string
  picture:string
  sub:GLfloat
}

export default function LoginWithGoogle() {
    const [user,SetUser] = useState<User>()
    // const googleResponse = (response) =>{
    //     const { profileObj } = response
    //     console.log(`Welcome Back ${profileObj.name}!`)
    // }
    const googleAPI = 'https://www.googleapis.com/oauth2/v3/userinfo'
    const onClick = useGoogleLogin({
        onSuccess: response => {console.log(response);
           const token = (response.access_token);
            //Using Axios to fetch API from Google
           axios
                .get(googleAPI,{headers:{Authorization:`Bearer ${token}`}})
                .then(response => response.data)
                .then(user => {SetUser(user)})
                .catch(error => console.log(error))
            console.log(user)
            console.log(`Welcome Back, ${user?.name}`)
        },
        onError: error => {console.log(error)}
    })
  return (
        <Button
        onClick={() => onClick()}
        variant="contained"
        startIcon={<GoogleIcon />}
        fullWidth
        sx={{ backgroundColor: '#DB4437', color: 'white' }}
      >
        Login with Google
      </Button>
  )
}
