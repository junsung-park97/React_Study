import "./Editor.css";
import React, { useState, useRef } from "react";

interface EditorProps {
  onCreate: (content: string) => void;
}

const Editor = ({ onCreate }: EditorProps) => {
  const [content, setcontent] = useState("");
  // useRef가 HTML의 input요소를 참조한다는 타입
  const contentRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (content === "") {
      // 빈 문자열로 호출시
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
  };

  // 이벤트 객체의 타입은 React.ChangeEvent<HTML요소타입> 형태
  const onChangContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcontent(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangContent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="새로운 To Do ..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
