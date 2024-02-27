import React, { useRef } from "react";
import { Form,Button } from "react-bootstrap";


const Contact = (props) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        const obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }
        console.log(obj)
        props.onAdd(obj);
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';

    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" ref={nameRef}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone Number" ref={phoneRef}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                submit
            </Button>
        </Form>
    )
}

export default Contact;