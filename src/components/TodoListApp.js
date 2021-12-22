import React, { Component } from 'react'
import ListGroup from './ListGroup'

export default class TodoListApp extends Component {
    render() {
        const {todos, deleteHandler, editHandler} = this.props

        const todosList = todos.length ? (
            todos.map(todo => {
                return (
                    <ListGroup key={todo.id} title={todo.title} deleteHandler={() => deleteHandler(todo.id)} editHandler={() => editHandler(todo.id)} />
                );
            })
        ) :
        (<p className='container card p-3 fs-5 fw-bolder null-todo'>You have no todo's left</p>)
        return (
            <div>
                <h2 className='mt-5 mb-3'>Todo List</h2>
                <div className='list-group'>
                    {todosList}
                </div>
            </div>
        )
    }
}
