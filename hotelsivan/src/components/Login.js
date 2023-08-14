import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import  {useRef} from 'react';
import {Card , Form , Button } from  "react-bootstrap"
import { auth } from './firebase';


function Login({setUserEmail }) {

  const emailRef = useRef()
  const passwordRef= useRef()
  const passwordconfirmRef = useRef()


   async function handlesubmit(e){
    e.preventDefault()
    console.log(emailRef , passwordRef)
    return createUserWithEmailAndPassword(auth , emailRef.current.value , passwordRef.current.value).then(userCredentials=>{
      console.log(userCredentials)
      setUserEmail(userCredentials.user.email) 
    }).catch(error=>{
      console.log(error.message)
    })
    
  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center'>Sign Up</h2>
        <Form>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id='confirmpassword'>
            <Form.Label>Password Confirmation </Form.Label>
            <Form.Control type='password' ref={passwordconfirmRef} required />
          </Form.Group>
          <Button className='w-100' type="submit" onClick={handlesubmit}>Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
      Already have an account ? Log In
    </div>
    </>
  );
}

export default Login;
