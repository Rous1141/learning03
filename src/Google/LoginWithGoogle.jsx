import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import GoogleIcon from '@mui/icons-material/Google'; 
import Button from '@mui/material/Button';
import  axios  from 'axios';
export default function LoginWithGoogle() {
    // const googleResponse = (response) =>{
    //     const { profileObj } = response
    //     console.log(`Welcome Back ${profileObj.name}!`)
    // }
    const googleAPI = 'https://www.googleapis.com/oauth2/v3/userinfo'
    const onClick = useGoogleLogin({
        onSuccess: response => {console.log(response);
           const token = (response.access_token);
            //Using Axios to fetch API from Google
           const userInfo = axios
                            .get(googleAPI,{headers:{Authorization:`Bearer ${token}`}})
                            .catch(error => console.log(error))
            console.log(userInfo)
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
