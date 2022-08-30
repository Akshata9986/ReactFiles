function Counter() {
    let [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                increment();
            }}>incr</button>

            <button onClick={() => { decrement(); }
            }>decr</button>

            <button onClick={() => { reset(); }
            }>reset</button>
        </div>)
}

ReactDOM.render(<Counter />, document.getElementById("container"));