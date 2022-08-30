function MyApp() {
    let [name, setName] = React.useState("Avi");
    const updateName = () => {
        setName("Akshata");
    };
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => {
                updateName();
            }}>
                click
            </button>
        </div>
    );
}

ReactDOM.render(<MyApp />, document.getElementById("container"));