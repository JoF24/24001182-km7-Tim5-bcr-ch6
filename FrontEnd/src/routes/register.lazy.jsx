import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { register } from "../service/auth";

export const Route = createLazyFileRoute("/register")({
    component: Register,
});

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(undefined);
    const {token} = useSelector((state)=>state.auth);

    useEffect(() => {
        // get token from local storage
        if (token) {
            navigate({ to: "/" });
        }
    }, [navigate, token]);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("Password and password confirmation must be same!");
        }
        const request = {
            name,
            email,
            password,
            profilePicture,
        };
        // get the data if fetching succeed!
        const result = await register(request);
        if (result.success) {
            // save token to local storage
            dispatch(setToken(result.data.token));

            // redirect to home
            navigate({ to: "/" });
            return;
        }

        alert(result.message);
    };
    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card className="text-center">
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextName"
                            >
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Your Name"
                                        required
                                        value={name}
                                        onChange={(event)=>{
                                            setName(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextEmail"
                            >
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword"
                            >
                                <Form.Label column sm="3">
                                    Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword"
                            >
                                <Form.Label column sm="3">
                                    Confirm Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={confirmPassword}
                                        onChange={(event) => {
                                            setConfirmPassword(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="formFileUpload"
                            >
                                <Form.Label column sm="2">
                                    Profile Picture
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="file"
                                        placeholder="Choose File"
                                        required
                                        onChange={(event) => {
                                            setProfilePicture(
                                                event.target.files[0]
                                            );
                                        }}
                                        accept=".jpg,.png"
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="primary">Register</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}