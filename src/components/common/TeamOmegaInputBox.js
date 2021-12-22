import React, { Component } from 'react';

export default class TeamOmegaInputBox extends Component {
    render() {
        const {todo, onChange, placeholder, className} = this.props
        return (
            <div>
                <input type='text' className={className} placeholder={placeholder} onChange={onChange} value={todo} />
            </div>
        )
    }
}
