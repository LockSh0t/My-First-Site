import { useState } from "react"

function Counter(props: {start: number}): JSX.Element {
    const [count, setCount] = useState<number>(props.start);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
        </>
    );
}

export default Counter;
