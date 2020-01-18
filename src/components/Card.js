import React, { useState } from "react";

function Card(props) {
  function typerecognition() {}
  console.log(props.task, "task");

  return (
    <div className="Cards">
      <p>{props.task.name}</p>

      {props.task.type === "todo" && (
        <button className="Doing" onClick={() => props.moveToDoing(props.task)}>
          Move to Doing
        </button>
      )}
      {props.task.type === "doing" && (
        <button className="Done" onClick={() => props.moveToDone(props.task)}>
          Move to Done
        </button>
      )}

      <button className="Edit">Edit</button>
    </div>
  );
}

export default Card;
