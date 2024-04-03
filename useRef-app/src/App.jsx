import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const ref = useRef();

    function updateStateCount() {
        setCount(count + 1);
    }

    function updateRefCount() {
        ref.current.style.backgroundColor =
            ref.current.style.backgroundColor == "red" ? "" : "red";
        ref.current.count = ref.current.count ? ref.current.count + 1 : 1;
    }

    useEffect(() => {
        console.log(`We have rerendered ${count} times`);
    });

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div>
                <h3>{count}</h3>
                <button onClick={updateStateCount}>useState</button>
            </div>
            <div>
                <h3>{ref.current?.count > 0 ? ref.current.count : 0}</h3>
                <button ref={ref} onClick={updateRefCount}>
                    useRef
                </button>
            </div>
        </div>
    );
}

export default App;
