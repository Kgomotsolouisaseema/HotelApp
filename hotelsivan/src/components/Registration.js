import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useRef } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../index.css";

function Login({ setUserEmail }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const navigate = useNavigate();

  //toggle visibility of passworord function
  function toggleVisibilty() {
    setPasswordVisible(!passwordVisible);
  }

  async function handlesubmit(e) {
    e.preventDefault();
    // console.log(emailRef , passwordRef)
    if (passwordRef !== passwordconfirmRef) {
      console.log("passwords dont match");
    }
    return createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredentials) => {
        console.log(userCredentials);
        setUserEmail(userCredentials.user.email);
        navigate("/Home");

        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Successfull Logged in.",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <Container style={{ minHeight: "100vh", padding: "10px" }}>
      <div style={{ maxWidth: "500px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center">Become a Member of Hotel Sivan : </h2>
            <hr />
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  ref={passwordRef}
                  required
                />
                <i
                  className={`bi ${
                    passwordVisible ? "bi-eye" : "bi-eye-slash"
                  } password-toggle-icon`}
                  onClick={toggleVisibilty}
                ></i>
              </Form.Group>
              <Form.Group id="confirmpassword">
                <Form.Label>Password Confirmation </Form.Label>
                
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  ref={passwordconfirmRef}
                  required
                />
                <i
                  className={`bi ${
                    passwordVisible ? "bi-eye" : "bi-eye-slash"
                  } password-toggle-icon`}
                  onClick={toggleVisibilty}
                ></i>
              </Form.Group>
              <br />
              <Button className="w-100" type="submit" onClick={handlesubmit}>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account ? <Link to="/login"> Sign In</Link>
        </div>
      </div>
    </Container>
  );
}

export default Login;
