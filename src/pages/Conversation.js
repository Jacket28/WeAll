import React, {Component} from 'react';
import './Conversation.css';
import Messages from "./Messages";
import Input from "../components/Input";
import Delete from "../components/Delete";
import {Backend} from "../services/backend";

class App extends Component {

  render() {
    return (
        <div className="Conversation">
          <div className="Conversation-header">
            <h1>My Chat App</h1>
            <Delete/>
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
    Backend.setMessage(localStorage.getItem("idRecipient"), message);
  }

}

export default App;