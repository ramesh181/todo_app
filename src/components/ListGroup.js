import React, { Component } from 'react'
import Button from './common/TeamOmegaButtons'

export default class ListGroup extends Component {
    render() {
        const {title, deleteHandler, editHandler} = this.props
        return (
            <div className='list-group-item container card mb-3 todo-item'>
                <span className='fs-5 fw-bolder float-start mt-2'>{title}</span>       
                <Button className='btn btn-sm float-end' onSubmit={editHandler} Value={<img src="https://img.icons8.com/ios-glyphs/31/000000/edit-row.png"  /> } toggle="modal" target="#exampleModal"/>
                
                <Button className='btn btn-sm float-end' onSubmit={deleteHandler} Value={<img src="https://img.icons8.com/material/30/000000/waste--v1.png"/> } />
                {/* <span className='text-danger mx-2 float-end' onClick={deleteHandler}>
                <img src="https://img.icons8.com/material/30/000000/waste--v1.png" className='mx-1 mt-1 p-1'/>
                </span> */}
            </div>
        )
    }
}
