class Parent extends React.Component {
    componentDidMount() {
        //this method will be exicuted for the first time mounting the real dom
        //it is used to make side effects to the component
        //you can make api calls in this method
        console.log("parent componentDidMount exicuted");
    }
    constructor() {
        super();
        this.state = {
            text: "mounting phase",
            show: true,
        };
        console.log("parent constructor exicuted");
    }
    static getDerivedStateFromProps(props, state) {
        //1.it returns the state or if there is no change in the state it will return null
        console.log("parent getDerivedStateFromProps exicuted");
        return state;
    }

    render() {
        //in render method we should update anything or we should not
        //perform any side effects,becuase if try to update anything
        //render method  will goto infinite loop

        console.log("render method exicuted");
        return (
            <div>
                {this.props.age}
                <h1>{this.state.text}</h1>
                <button onClick={() => {
                    this.updateText("upadating phase");
                }}>click</button>

                {this.state.show ? <Child /> : null}
            </div>
        );
    }

    updateText(text) {
        this.setState({
            text: text,
            show: false,
        });
    }

    shouldComponentUpadate() {
        console.log("parent ShouldComponentupdate exicuted");
        return true;
    }


    getSnapshotBeforeUpdate() {
        console.log("parent getSnapshotBeforeUpadte exicuted");
        return "scrolling position";
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log("Parent getSnapShotBeforeUpdate exicuted");

        console.log("previous prop", prevProp);
        console.log("previous state", prevState);
        console.log("snapshot", snapshot);
    }
}

class Child extends React.Component {
    render() {
        return <div>child component</div>;
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount exicuted");
    }
}

ReactDOM.render(<Parent age="23" />, document.getElementById("container"));