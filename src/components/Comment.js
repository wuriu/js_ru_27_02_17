import React, {Component} from 'react'

class Comment extends Component {
	constructor() {
        super();
    }

    render() {
        const {comment} = this.props;
        return (
            <div>
                <h3>{comment.user}</h3>
                {comment.text}
            </div>
        )
    }
}

export default Comment