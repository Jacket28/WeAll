import {Component} from "react";
import React from "react";
import {Backend} from "../services/backend";
import '../design/Conversation.css';

class Delete extends Component {
    state = {
        text: ""
    }


    onSubmit(e) {
        e.preventDefault();
        this.setState({text: ""});
        Backend.deleteConversation(localStorage.getItem("idRecipient"));
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <button className="btn-color" id="delete">Supprimer cette conversation</button>
                </form>
            </div>
        );
    }
}

export default Delete;