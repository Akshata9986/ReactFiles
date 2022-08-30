class Welcome extends React.Component {
    render() {
        console.log(this.props);
        let firstName = "Avi";
        return (
            <div>
                <h1>
                    Welcome {firstName} and {this.props.secondName}
                </h1>
                <button onClick={this.getData()}>click</button>
                <button onClick={() => {
                    this.getName();
                }}>get name</button>
                <button onClick={this.greet.bind(this)}>greet</button>
            </div>
        );
    }
    getData() {
        console.log("Get data executed");
        console.log(this);
    }
    greet() {
        console.log("greet method executed");
        console.log(this);
    }
    getName() {
        console.log(this.props.children);
    }
}

ReactDOM.render(<Welcome secondName="Ram"> <h1>hello</h1></Welcome>,
    document.getElementById("container")
);