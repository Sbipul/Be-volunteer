import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const {handleGoogle,setUser,setError} = useAuth()


    const handleGoogleAndRedirect = () => {
        handleGoogle()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_url)
    })
    .catch((error) => {
        setError(error.message)
    });
   
    }
    return (
        <div>
            <Container>
                <div className="w-50 pb-5 mx-auto">
                    <div className="shadow p-5 d-flex align-items-center justify-content-center" style={{height:'50vh'}}>
                        <div>
                        <h3>Please Sign up first</h3>
                        <Button onClick={handleGoogleAndRedirect} >Google Sign up</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;