import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [todoList, setTodoList] = useState([
    {
      name: 1,
      type: "todo"
    },
    {
      name: 2,
      type: "todo"
    },
    {
      name: 3,
      type: "todo"
    }
  ]);

  function handleChangeInput(e) {
    const value = e.target.value;
    setValue(value);
  }

  function addTodo() {
    setTodoList([
      ...todoList,
      {
        name: value,
        type: "todo"
      }
    ]);
  }

  function moveToDo(task) {
    const newDoingList = doingList.filter(doingList => {
      if (doingList.name !== doingList.name) {
        return doingList;
      }
    });
    setTodoList([...todoList, { ...task, type: "todo" }]);
    setDoingList(newDoingList);
  }

  function moveToDoing(task) {
    const newTodoList = todoList.filter(todoTask => {
      if (todoTask.name !== task.name) {
        return todoTask;
      }
    });
    setTodoList(newTodoList);
    setDoingList([...doingList, { ...task, type: "doing" }]);
  }

  function moveToDone(task) {
    const newDoingList = doingList.filter(doingList => {
      if (doingList.name !== task.name) {
        return doingList;
      }
    });
    setDoingList(newDoingList);
    setDoneList([...doneList, { ...task, type: "done" }]);
  }

  function moveDoneToDoing(task) {
    const newDoneList = doneList.filter(doneList => {
      if (doneList.name === task.name) {
        return "";
      }
    });
    setDoneList(newDoneList);
    setDoingList([...doingList, { ...task, type: "doing" }]);
  }
  return (
    <div className="Container">
      <div className="Todobar">
        <p>Add your Todo item :</p>
        <input type="text" onChange={handleChangeInput} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="TodoCols">
        <div className="Col-3">
          <h1>Todo</h1>
          {todoList.map(task => {
            return <Card task={task} moveToDoing={moveToDoing} />;
          })}
        </div>
        <div className="Col-3">
          <h1>Doing</h1>
          {doingList.map(task => {
            return (
              <Card task={task} moveToDone={moveToDone} moveToDo={moveToDo} />
            );
          })}
        </div>

        <div className="Col-3">
          <h1>Done</h1>
          {doneList.map(task => {
            return <Card task={task} moveDoneToDoing={moveDoneToDoing} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
