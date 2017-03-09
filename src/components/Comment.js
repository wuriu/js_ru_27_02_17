import React, {PropTypes} from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.PropTypes = {
    comment: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string
        }).isRequired,
}

export default Comment