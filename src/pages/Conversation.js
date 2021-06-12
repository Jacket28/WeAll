import React, {Component} from 'react';
import './Conversation.css';
import Messages from "./Messages";
import Input from "../components/Input";
import {Backend} from "../services/backend";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="Conversation">
                <div className="Conversation-header">
                    <h1>My Chat App</h1>
                </div>
                <Messages
                />
                <Input
                    onSendMessage={this.onSendMessage}
                />
            </div>
        );
    }

    onSendMessage = (message) => {
        Backend.setMessage(2, message);
    }

}

export default App;
