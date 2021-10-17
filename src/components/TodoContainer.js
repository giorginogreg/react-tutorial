import React from "react"
import Header from "./Header"
import TodoInput from './TodoInput'
import TodoItemsContainer from "./TodoItemsContainer"
class TodoContainer extends React.Component {
    
    state = {
        todos: [
            {
                id: 1,
                title: "Rilascio in produzione",
                completed: true,
            }
        ]
    };
    render() {
        // Al posto del <> </> posso usare React.Fragment oppure dei div
        return (
            <>
                <Header/>
                <TodoInput/>
                <TodoItemsContainer todos={this.state.todos} />
                
            </>
        )
    }
    
}
export default TodoContainer