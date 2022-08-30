function MyApp() {
    const [person, setPerson] = React.useState({
        fName: "Akshata",
        lName: "Naik"
    });

    function updateName() {
        setPerson({
            ...person,
            fName: "Namana",
            lName: "Jain"
        });
    }

    return (
        <div>
            <p>{person.fName}</p>
            <p>{person.lName}</p>
            <button onClick={() => {
                updateName();
            }}>click</button>
        </div>
    );

}

ReactDOM.render(<MyApp />, document.getElementById("container"));