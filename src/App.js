import React, {Component} from 'react';
import TodoItem from "./components/TodoItem";
import './index.css'
import todosData from "./todosData";


// function App() {
//     return (
//         <div>
//             <img src="https://www.fillmurray.com/200/100" onMouseOver={() => console.log('Salam')}/>
//             <br />
//             <br />
//             <button onClick={() => console.log('I was clicked')}>Click me</button>
//         </div>
//     )
// }
//
// export default App



class App extends Component{
    constructor() {
        super();

        this.state ={
            todos : todosData,
        };


        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        const todoList = this.state.todos.map(item =>
            <TodoItem key = {item.id}
                      item = {item}
                      handleChange = {this.handleChange}
                      style = {this.styleCompleted}
            />);
        return(
            <div className='todo-list'>
                {todoList}
                {console.log(this.state.todos)}
            </div>
        )

    }

    // styleCompleted = () => this.setState({
    //     todos :  this.state.todos.map((todo) => (todo.completed? this.styles.color = 'green': this.styles.color = 'red'))
    // });
    handleChange(id) {

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            });
            return {
                todos: updatedTodos
            }
        })
    }




}

export default App


// class App extends React.Component{
//     constructor(){
//         super();
//
//         this.state = {
//             isLoggedIn: true
//         };
//     }
//     render(){
//         let wordDisplay = (this.state.isLoggedIn) ? 'in' : 'out';
//         return (
//              <div>
//                  <h1>You are currently logged {wordDisplay}</h1>
//              </div>
//         )
//     }
//
// }

// export default App








// const date = new Date();
// const hours = date.getHours();
// let timeOfDay;
// const styles = {
//     fontSize: 30
// };
//
// if(hours < 12){
//     timeOfDay = 'morning';
//     styles.color = "#04756F";
// }
// else if(hours >= 12 && hours < 18){
//     timeOfDay = 'afternoon';
//     styles.color = "#2E0952";
// }
// else{
//     timeOfDay = 'night';
//     styles.color = "#D90000";
// }
//
// return(
//     <h1 style={styles}>Good {timeOfDay}</h1>
// )