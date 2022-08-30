function Greet() {
    const myStyle = { backgroundColor: "red" };
    return (
        <div>
            <h1 style={myStyle}>This is components with style</h1>
            {/* <h2 style={backgroundColor:"pink"}> Hello ReactJS </h2> */}
        </div >

    );
}

ReactDOM.render(<Greet />, document.getElementById("container"));