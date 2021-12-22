import React, { Component } from 'react'

export default class TeamOmegaButtons extends Component {
    render() {
        const {onSubmit, Value, className, dismiss, toggle, target} = this.props
        return (
            <div>
                <button type='button' className={className} onClick={onSubmit} data-bs-dismiss={dismiss}  data-bs-toggle={toggle} data-bs-target={target}>{Value}</button>
            </div>
        )
    }
}

