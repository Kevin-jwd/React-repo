import React, { useState } from "react";

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

    return (
        <div>
            <h1>{title}</h1>
            <div className="container">
                <div className="board">
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>{todo.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
