//passing the data from parent to child

function App(props) {
    let Name = "Akshata";
    return (
        <div>
            <h1>
                Name:{props.loggedInUser}
            </h1>
            <Home appName="Netflix" user={Name} />
            {/*child of my app component*/}
        </div>
    );
}

function Home(props) {
    return (
        <div>
            <h1>Welcome {props.user}</h1>
            {/*welcome Akshata*/}
        </div>
    );
}
ReactDOM.render(
    <App loggedInUser="Vaibhav" />, document.getElementById("container")
);