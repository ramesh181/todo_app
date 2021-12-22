import React, { Component } from 'react';
import InputBox from './TeamOmegaInputBox';
import Button from './TeamOmegaButtons';


export default class TeamOmegaModalPopup extends Component {
    render() {
        const {onChange,todo,onSubmit, closeHndler} = this.props
        return (
            <div>
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog p-3">
                    <div className="modal-content">
                        <form onSubmit={onSubmit}>
                            <div className="modal-body m-4 float-center">
                                <InputBox todo={todo} onChange={onChange} className='form-control rounded' />
                            </div>
                            <div className="modal-footer">
                                <Button className="btn btn-secondary" Value='Save Changes' onSubmit={onSubmit} dismiss="modal" />
                                <Button className="btn btn-primary" Value='Close' dismiss="modal" onSubmit={closeHndler}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
