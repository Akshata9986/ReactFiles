function Greet() {
    const myStyle = { backgroundColor: "red" };
    return (
        <div className="main">
            <div className="n1">
                <div className="d1"></div>
                <div className="d2"></div>
            </div>
            <div className="n2">
                <div className="d3"></div>
                <div className="d4"></div>
            </div>
        </div >
    );
}

ReactDOM.render(<Greet />, document.getElementById("container"));