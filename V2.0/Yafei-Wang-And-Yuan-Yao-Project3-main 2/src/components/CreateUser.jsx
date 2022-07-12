import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { Card, Button } from "react-bootstrap";

export default function CreateUser(props) {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function createNewUser() {
        Axios.post('/api/user/', { Email, Password })
            .then(response => {
                console.log("Created user");
                console.log(response.data);
                navigate('/');

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Create an Account</Card.Header>
                <Card.Body>
                    <h5>Email</h5>
                    <input value={Email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={Password} onChange={e => setPassword(e.target.value)} />
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" onClick={() => createNewUser()} >
                Create
            </Button>
        </div>
    )
} 