import { Component } from "react";

import {
  FormAddTask,
  TitleAddTask,
  InputAddTas,
  BtnAdd,
} from "./TodoEditor.style";

class TodoEditor extends Component {
  state = { message: "" };
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };
  render() {
    return (
      <FormAddTask onSubmit={this.submitForm}>
        <TitleAddTask>Add a new task</TitleAddTask>
        <InputAddTas
          value={this.state.message}
          type="text"
          onChange={this.handleChange}
        ></InputAddTas>
        <BtnAdd type="submit">Add </BtnAdd>
      </FormAddTask>
    );
  }
}
export default TodoEditor;
