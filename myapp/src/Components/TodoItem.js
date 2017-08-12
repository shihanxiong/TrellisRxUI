import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

// Validation prop types
TodoItem.propTypes = {
    todo: React.PropTypes.object,
}

export default TodoItem;
