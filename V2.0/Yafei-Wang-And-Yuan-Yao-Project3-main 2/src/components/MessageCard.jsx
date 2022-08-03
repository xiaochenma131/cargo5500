import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MessageCard(props) {
    const message = props.message;

    return (
        <div className="car-card">
            <Card className='w-auto'>
                <Card.Header>
                    <span color="blue">Message</span></Card.Header>
                <Card.Body>
                    <Card.Text>From: </Card.Text>
                    <Card.Text>Send Time: </Card.Text>
                    <Card.Text>Content: </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}