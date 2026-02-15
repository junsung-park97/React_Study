import "./List.css";
import ToDoItem from "./ToDoItem";
import React, { useState } from "react";

interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  date: string;
}

interface Todos {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const List = ({ todos, onUpdate, onDelete }: Todos) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };

  const searchResult = getSearchResult();

  return (
    <>
      <div className="list">
        <h4>Todo List 🍀</h4>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력해주세요"
        />
        <div className="todo_wrapper">
          {searchResult.map((todo: Todo) => {
            return (
              <ToDoItem
                key={todo.id}
                {...todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
