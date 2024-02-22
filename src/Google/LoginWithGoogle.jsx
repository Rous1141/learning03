import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import GoogleIcon from '@mui/icons-material/Google'; 
import Button from '@mui/material/Button';
export default function LoginWithGoogle() {
    // const googleResponse = (response) =>{
    //     const { profileObj } = response
    //     console.log(`Welcome Back ${profileObj.name}!`)
    // }
    const onClick = useGoogleLogin({
        onSuccess: response => {console.log(response)},
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
