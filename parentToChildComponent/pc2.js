
function Main() {
    let data = ["chocolate", "mango", "strawberry", "banana"];
    return (
        <div>
            <h1>
                Parent component
            </h1>
            <Child data={data} />
        </div>
    );
}

function Child(props) {
    console.log(props.data);
    return (
        <div>
            <h1> Child component values</h1>

            {props.data.map((value, ind) => {
                return <p key={ind}> {value} </p>;
            })}

        </div>
    );
}
ReactDOM.render(
    <Main />, document.getElementById("container")
);





function Parent() {
    let data2 = [
        { firstName: "megha", lName: "gowda", phno: 4576477677 },
        { firstName: "akshata", lName: "naik", phno: 45766466677 },
        { firstName: "chandana", lName: "narayan", phno: 45769897987 }
    ];
    return (
        <div>
            <h1>
                Data2 component
            </h1>
            <Baby data2={data2} />
        </div>
    );

}

function Baby(props) {
    console.log(props.data2);
    return (
        <div>
            <h1> Baby component values</h1>

            {props.data2.map((value, ind) => {
                return <h2 key={ind}> {value.firstName}-{value.lName} </h2>;
            })}

        </div>
    );
}

ReactDOM.render(
    <Parent />, document.getElementById("container")
);