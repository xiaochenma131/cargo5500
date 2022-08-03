import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./../App.css";
import MessageCards from "./MessageCards";

export default function MyMessagesPage() {
    const [messages, setMessages] = useState('');

    function getMessages() {
        Axios.get("/api/messages/myMessages")
            .then(function (response) {
                setMessages(response.data);
            })
    }

    useEffect(getMessages, []);

    return (
        <div>
            Hello
            <MessageCards messages={messages} />
        </div>
    );
}