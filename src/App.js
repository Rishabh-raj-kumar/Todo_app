import React,{Component} from 'react';
import './App.css'
import Plan from './plan';

class App extends Component {
  state = {
    items : [],
    text : ""
  }

  handleChange = (e) =>{
    this.setState({ text : e.target.value})
  }
  handleAdd = (e) => {
    if(this.state.text != ''){
      const items = [...this.state.items, this.state.text];
      this.setState({ items : items, text : ""})
    }
  }

  handleDelete = (id) =>{
    const OldItems = [...this.state.items];
    const items = OldItems.filter((elem,i) =>{
      return i !== id
    })
    this.setState({ items : items})
  }
  
  render(){
  return (
    <>
      <div className='w-screen h-screen grid place-items-center'>
        <div className="p-3 bg-gray-800 w-[330px] rounded-sm">
          <h1 className="text-white font-3xl font-medium text-center">Todo App</h1>
          <div className="mt-3 flex gap-3 flex-wrap">
            <input type="text"
              className="p-2 rounded outline-none border-none"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Enter the Task"
              />
            <input type="submit"
              className="px-3 rounded tracking-sm uppercase bg-black text-white cursor-pointer"
              onClick={this.handleAdd}/>
          </div>
          <div className="block mt-5 ">
            {
              this.state.items.map((value,i) =>(
                 <Plan id={i} value={value}
                   sendData={this.handleDelete}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
  }
}

export default App;
