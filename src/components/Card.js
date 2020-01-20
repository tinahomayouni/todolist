import React, { useState } from "react";

function Card(props) {
  console.log(props.task, "task");

  return (
    <div className="Cards">
      <p>{props.task.name}</p>

      {props.task.type === "todo" && (
        <button onClick={() => props.moveToDoing(props.task)}>&#8594;</button>
      )}
      {props.task.type === "doing" && (
        <>
          <button onClick={() => props.moveToDo(props.task)}>
            TODO &#8592;
          </button>
          <button onClick={() => props.moveToDone(props.task)}>
            DONE &#8594;
          </button>
        </>
      )}
      {props.task.type === "done" && (
        <button onClick={() => props.moveDoneToDoing(props.task)}>
          &#8592;
        </button>
      )}
      {/* {
        <button onClick={() => props.moveToDoing(props.task)}>&#8594;</button>
        <button onClick={() => props.moveToDone(props.task)}>&#8592;</button>
        <button className="Edit">Edit</button>
      } */}
    </div>
  );
}

export default Card;
