class Greet extends React.Component {
    state = {
        firstName: "akshata",
        age: 22,
    };
    changeName = () => {
        console.log("before setState:", this.state.firstName);//akshata

        this.setState({
            firstName: "Himagirish",
            age: 22,
        },
            () => {
                console.log("after setState", this.state.firstName);
            }
        );
    };
    changeProp = () => {
        this.props.lName = "ramana";//props are immutable
    };
    render() {
        console.log(this.props.lName);
        return (
            <div>
                <h1>firstName:{this.state.firstName},age:{this.state.age}</h1>
                <button onClick={() => {
                    this.changeName();
                }}>get name</button>
                <button onClick={() => {
                    this.changeProp();
                }}>click to change props</button>

            </div>
        );
    }
}
ReactDOM.render(<Greet lName="Naik" />, document.getElementById("container"));


