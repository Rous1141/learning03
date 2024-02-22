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
} // This is the Object google return for us, having all user infomation in their Gmail account

export default function LoginWithGoogle({handleClick}) {
    const [user,SetUser] = useState<User>()
    // const googleResponse = (response) =>{
    //     const { profileObj } = response
    //     console.log(`Welcome Back ${profileObj.name}!`)
    // }
    //This Method will able you to fetch Google Authentication Token and use Google API to fetch user gmail account info without needing a Backend
    const googleAPI = 'https://www.googleapis.com/oauth2/v3/userinfo' // URL to googleapis to authenticate user token
    const onClick = useGoogleLogin({
          onSuccess: async response => {console.log(response);
           const token = (response.access_token);
            //Using Axios to fetch API from Google
            //Async await to synchonize fetching data
                await axios
                .get(googleAPI,{headers:{Authorization:`Bearer ${token}`}})
                .then(response => response.data)
                .then(user => {SetUser(user);},handleClick())
                .catch(error => console.log(error))
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
