import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import  {useRef} from 'react';
import {Card , Form , Button } from  "react-bootstrap"
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";


function Login({setUserEmail }) {
  const emailRef = useRef()
  const passwordRef= useRef()
  const navigate = useNavigate();
 

   async function handlesubmit(e){
    
    e.preventDefault()
    console.log(emailRef , passwordRef)
    return createUserWithEmailAndPassword(auth , emailRef.current.value , passwordRef.current.value).then(userCredentials=>{
      // console.log(userCredentials)
      setUserEmail(userCredentials.user.email) 
      navigate('/Home');
      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: "Successfull Logged in.",
        showConfirmButton: false,
        timer: 1000,
      });
    }).catch(error=>{
      console.log(error.message)
    })
    
  }
  return (
    <Container style={{minHeight:"100vh" , padding: "10px"}}>
    <div style={{maxWidth:"600px"}}>
    <Card>
      <Card.Body>
        <h2 className='text-center'>Log In</h2>
        <Form>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <br/>
          <Button className='w-100' type="submit" onClick={handlesubmit}>Sign In</Button>
        </Form>
        
      </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
      Don't have an account ?  <Link to="/registration"> Sign Up</Link>
    </div>
    </div>
    </Container>
  );
}

export default Login;
