import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="List">
      <h4>Todo List</h4>
      <input/>
      <div className="todos_wrapper">
        <TodoItem/>
      </div>
    </div>
  );
};

export default List;
