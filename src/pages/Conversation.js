import React, {Component} from 'react';
import '../design/Conversation.css';
import Messages from "./Messages";
import Input from "../components/Input";
import Delete from "../components/Delete";
import {Backend} from "../services/backend";
import History from "./History";

class Conversation extends Component {

    render() {
        return (
            <div className="Conversation">
                <History/>
                <div className="uk-card uk-card-default uk-width-1-1@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small " uk-grid>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">Conversation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body uk-card-body uk-padding-small" id="chat">
                        <Messages/>

                    </div>
                    <div className="uk-card-footer">
                        <div className="justify-content-center">
                            <Input onSendMessage={this.onSendMessage}/>
                                <Delete/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    onSendMessage = (message) => {
        if(message!="")
            Backend.setMessage(localStorage.getItem("idRecipient"), message);
    }

}

export default Conversation;