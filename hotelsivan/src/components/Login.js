import React, { useRef, useState } from "react";
import { Form, Button, Card ,Alert } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup } = useAuth();
    const [error,setError] = useState(" ")
    const [loading ,setLoading] = useState(false)

    //this async function handles the password and email and confirmation of passwords if they match
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError(" ")          //sets our error to empty string 
            setLoading(true)
         await signup(emailRef.current.value , passwordRef.current.value) 
        }catch(error){
            console.log(error)
            setError("did not create account")
        }
        setLoading(false)
    }
  return (
    <>
      <Card>
        <Card.Body>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {currentuser && currentuser.email} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100" type="submit">Log In</Button> 
          </Form>
          </div>
        </Card.Body>
        
      </Card>
      <div className="w-100 text-center mt-2">
        Need  an account ? <Link to="#" >Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
