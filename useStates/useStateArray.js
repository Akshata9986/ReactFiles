function MyApp() {
    const [bikes, setBikes] = React.useState(["KTM", "Apache", "Himalayan", "Yamaha FZ"]);
    console.log(bikes);

    let remove = (() => {
        bikes.pop();
        setBikes([...bikes]);
    })
    return (
        <div>
            {bikes.map((value, index) => {
                return <p key={index}>{value}</p>;
            })}
            <button onClick={() => {
                remove();
            }}>pop</button>
        </div>
    );

}

ReactDOM.render(<MyApp />, document.getElementById("container"));