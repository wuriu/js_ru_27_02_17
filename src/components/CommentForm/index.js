import React, {Component} from 'react'
import './style.css'

export default class CommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    render(){
        const { text, user } = this.state;
        return (
            <form className="comment-form">
                <div>Add your comment:</div>
                <div>
                    <label className="comment-form-label">Name</label>
                    <input className="comment-form-input" type="text" value={user} onChange={this.handleUserChange}/>
                </div>
                <div>
                    <label className="comment-form-label">Comment</label>
                    <textarea className="comment-form-textarea" value={text} onChange={this.handleTextChange} />
                </div>
            </form>
        )
    }

    handleUserChange = ev => {
        const user = ev.target.value;

        if (user.length > 10) return;

        this.setState({ user })
    }

    handleTextChange = ev => {
        const text = ev.target.value;

        if (text.length > 150) return;

        this.setState({ text })
    }
}