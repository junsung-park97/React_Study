import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toDateString(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().toDateString(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content: string): void => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toDateString(),
    };

    setTodos([newData, ...todos]);
  };

  const onUpdate = (targetId: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
      }),
    );
  };

  const onDelete = (targetId: number) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <div className="app">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
