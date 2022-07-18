import { TaskItem, DeleteBtn } from "./ToDoList.style";
import { IoTrashOutline } from "react-icons/io5";

const ToDoList = ({ todos, deleteEl, toggle }) => (
  <>
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <TaskItem key={id} className="li">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggle(id)}
          ></input>
          {text}

          <DeleteBtn className="btnDel" onClick={() => deleteEl(id)}>
            <IoTrashOutline />
          </DeleteBtn>
        </TaskItem>
      ))}
    </ul>
  </>
);
export default ToDoList;
