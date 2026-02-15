import "./ToDoItem.css";
import { useState } from "react";

interface ToDo {
  id: number;
  isDone: boolean;
  content: string;
  date: string;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const ToDoItem = ({ id, isDone, content, date, onUpdate, onDelete }: ToDo) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="todoitem">
      <input
        readOnly
        onChange={onChangeCheckbox}
        type="checkbox"
        checked={isDone}
      />
      <div className="context">{content}</div>
      <div className="date">{date}</div>
      <button className="delete" onClick={onClickDeleteButton}>
        삭제
      </button>
    </div>
  );
};

export default ToDoItem;
