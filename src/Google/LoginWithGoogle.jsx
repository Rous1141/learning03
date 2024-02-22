import React from 'react'
import GoogleLogin from 'react-google-login'

export default function LoginWithGoogle() {
    const googleResponse = (response) =>{
        console.log(response)
    }
  return (
        <GoogleLogin
            clientId='1028943598479-hv1173h4i7533ln9oh7b1844i7qf1piv.apps.googleusercontent.com'
            buttonText='Sign in with Google'
            onSuccess={googleResponse}
            onFailure={googleResponse}
            cookiePolicy={"single_host_origin"}
        />
  )
}
