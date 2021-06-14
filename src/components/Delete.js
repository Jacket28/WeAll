import {Component} from "react";
import React from "react";
import {Backend} from "../services/backend";

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
                    <button style={{fontSize: 15,backgroundColor: "grey", color: "white",border: "none", borderRadius: 8, marginLeft: 10, padding: 5|10, alignContent:"right" }}>Delete the conversation</button>
                </form>
            </div>
        );
    }
}

export default Delete;