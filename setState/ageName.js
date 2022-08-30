class Home extends React.Component {

    state = {
        age: "22",
        name: "Namana"
    };
    changeName = () => {
        console.log("before setState:", this.state.name);
        this.setState({
            name: "Akshata"
        },
            () => {
                console.log("after setState", this.state.name);
            }
        );
    };

    changeAge = () => {
        console.log("before setState:", this.state.age);
        this.setState({
            age: "23"
        },
            () => {
                console.log("after setState", this.state.age);
            }
        );
    };
    render() {
        return (
            <div>
                <h1>this is home page</h1>
                <button onClick={() => {
                    this.changeName();
                }}>get name</button>
                <button onClick={() => {
                    this.changeAge();
                }}>get age</button>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("container"));