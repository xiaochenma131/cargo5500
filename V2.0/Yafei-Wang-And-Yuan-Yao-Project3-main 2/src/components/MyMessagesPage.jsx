import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./../App.css";
import MessageCards from "./MessageCards";

export default function MyMessagesPage() {
    const [messages, setMessages] = useState('');
    const [email, setEmail] = useState('');

    function checkLogInUser() {
        Axios.get('/api/user/isLoggedIn')
            .then(response => setEmail(response.data.Email))
            .catch(error => console.log("User is not logged in"));
    }

    function getMessages() {
        Axios.post("/api/messages/myMessages")
            .then(function (response) {
                setMessages(response.data);
            })
    }

    useEffect(getMessages, []);

    return (
        <div>
            Hello
            {messages.length}
            <MessageCards messages={messages} />
        </div>
    );
}