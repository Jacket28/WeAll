import {Component} from "react";
import React from "react";
import '../design/Conversation.css';
class Input extends Component {
    state = {
        text: ""
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({text: ""});
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div className="Input">
                <form id="formInput" onSubmit={e => this.onSubmit(e)}>
                    <input id="inputText"
                        onChange={e => this.onChange(e)}
                        value={this.state.text}
                        type="text"
                        placeholder="Ecrivez votre message ici, et appuyez sur ENTER"
                        autoFocus={true}
                    />
                    <button className="btn-color" id="sendBtn">Envoyer</button>
                </form>
            </div>
        );
    }
}

export default Input;