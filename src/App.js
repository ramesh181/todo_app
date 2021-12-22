import React,{Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/common/TeamOmegaHeader';
import InputBox from './components/common/TeamOmegaInputBox';
import Button from './components/common/TeamOmegaButtons';
import TodoListApp from './components/TodoListApp';
import Modal from './components/common/TeamOmegaModalPopup';


class App extends Component {
  state = {
    todos:[],
    id:null,
    todo:"",
    modalInput:"",
    editTodo:false
  }
  changeHandler = (e) => {
    this.setState({
      todo: e.target.value,
      id:uuidv4()
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id:this.state.id,
      title:this.state.todo
    }
    if (newTodo.title !== '') {
      const updatedtodos = [...this.state.todos, newTodo]
      this.setState({
        todos:updatedtodos,
        todo:'',
        // id:uuidv4()
      })
    }
  }
  editHandler = (id) => {
    let todos = this.state.todos
    const selectedTodo = todos.find(todo => todo.id === id);
    this.setState({
      modalInput: selectedTodo.title,
      id,
      editTodo: true,
    })
    
  }
  deleteHandler = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  editValue = (e) =>{
    this.setState({
      modalInput: e.target.value
    })
  }
  saveChanges = (e) => {
    e.preventDefault();
    let todos = this.state.todos
    const selectTodo = todos.find(todo => todo.id === this.state.id);
    const index= todos.indexOf((selectTodo))
    todos[index]= {
      id: selectTodo.id,
      title: this.state.modalInput
    }
    this.setState({
      todos,
      // id:uuidv4(),
      editTodo: false
    })
  }
  closeHandler = () => {
    this.setState({
      // id:uuidv4(),
      editTodo: false
    })
  }
  render() { 
    return (        
      <div className='text-center'>
        <Header />
        <form onSubmit={this.submitHandler} className='container d-flex justify-content-center mt-5'>
          <InputBox onChange={this.changeHandler} todo={this.state.todo} placeholder='Add your todo item' className='form-control rounded' />
          <Button onSubmit={this.submitHandler} Value='ADD' className='btn btn-success rounded mx-3'/>
        </form>
        <TodoListApp todos={this.state.todos} deleteHandler={this.deleteHandler} editHandler={this.editHandler}/>
        <Modal todo={this.state.modalInput} onChange={this.editValue} onSubmit={this.saveChanges} closeHandler={this.closeHandler} />  
      </div>
        
    )
    
  }
}

export default App;
