import { findAllByTestId } from "@testing-library/dom";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import Form from "react-bootstrap/Form";

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = "오늘 할 일";

    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "잠자기", isChecked: false },
        { id: 2, text: "공부하기", isChecked: false },
        { id: 3, text: "코딩하기", isChecked: false },
        { id: 4, text: "밥먹기", isChecked: false },
    ]);

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, isChecked: !item.isChecked }
                    : item
            )
        );
    };

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, isChecked: false },
            ]);
            setNewTodo("");
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div className="input-row">
                    <Form.Control
                        type="text"
                        placeholder="할 일 입력"
                        size="lg"
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button
                        variant="primary"
                        style={{
                            whiteSpace: "nowrap",
                        }}
                        onClick={addTodo}
                    >
                        추가
                    </Button>
                </div>
                <p></p>
                <div className="board">
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    onChange={() => {
                                        handleCheckedChange(todo.id);
                                    }}
                                />
                                <span>
                                    {todo.isChecked ? (
                                        <del>{todo.text}</del>
                                    ) : (
                                        <span>{todo.text}</span>
                                    )}
                                </span>
                                <button
                                    className="del-button"
                                    onClick={() => {
                                        removeTodo(todo.id);
                                    }}
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
