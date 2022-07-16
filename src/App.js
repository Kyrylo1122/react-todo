import "./App.css";
import TodoEditor from "./componens/ToDoEditor/TodoEditor";
import { Filter } from "./componens/Filter/Filter";
import ToDoList from "./componens/ToDoList/ToDoList";
// import initialTodos from "./componens/initialTodos.json";
import shortid from "shortid";
import { Component } from "react";
import { Box } from "./componens/Box/Box";

class App extends Component {
  state = {
    todos: [],
    filter: "",
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({ todos: [todo, ...prevState.todos] }));
  };
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((e) => e.id !== todoId),
    }));
  };
  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((e) =>
        e.id === todoId ? { ...e, completed: !e.completed } : e
      ),
    }));
  };
  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsedItems = JSON.parse(todos);
    if (parsedItems) {
      this.setState({ todos: parsedItems });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
  render() {
    const { todos, filter } = this.state;
    const completed = todos.reduce(
      (acc, sum) => (sum.completed ? acc + 1 : acc),
      0
    );
    const normalizedFilter = filter.toLowerCase();
    const visibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Box
        as="section"
        p={6}
        backgroundImage="url(https://thumbs.dreamstime.com/b/vector-seamless-chekered-pattern-simple-square-background-111937806.jpg)"
        backgroundSize="100px "
        backgroundRepeat="repeat"
      >
        <h1>To Do List</h1>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="normal"
          bg="white"
          ml="auto"
          mr="auto"
          p={4}
        >
          <Box fontSize="10px" fontFamily="monospace">
            <span>General amount of tasks: {todos.length}</span>
            <br />
            <span>Completed tasks: {completed}</span>
          </Box>
          <TodoEditor onSubmit={this.addTodo} />
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ToDoList
            todos={visibleTodos}
            deleteEl={this.deleteTodo}
            toggle={this.toggleCompleted}
          />
        </Box>
      </Box>
    );
  }
}
export default App;
