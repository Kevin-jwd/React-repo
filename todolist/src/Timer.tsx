import { useState } from "react";
import { Button } from "react-bootstrap";

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);

    return (
        <div>
            <h2>타이머 : {seconds}초</h2>
            <Button
                variant="primary"
                onClick={() => {
                    setInterval((prev) => {
                        setSeconds((prev) => prev + 1);
                    }, 1000);
                }}
            >
                시작
            </Button>
        </div>
    );
};

export default Timer;
