class Parent extends React.Component {
    state = {
        text: "",
    };

    getDataFromChild(childData) {
        console.log(childData);
        this.setState(
            {
                text: childData,
            },
        );
    }


    render() {
        return (
            <div>
                <h1> Parent component </h1>
                <h2>{this.state.text}</h2>
                <Child callback={this.getDataFromChild.bind(this)} />
            </div>
        );
    }
}

class Child extends React.Component {

    render() {
        const str = "This is my precious data";
        return (
            <div>
                <h1>Child Component</h1>
                <button onClick={() => {
                    this.props.callback(str);
                }}>send data from child</button>
            </div>
        );
    }
}

ReactDOM.render(<Parent />, document.getElementById("container"));