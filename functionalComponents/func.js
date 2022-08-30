// functional component

function Header(props) {
    return (<div>
        <h1>Iam in header component</h1>
        <h2>{props.logo}-{props.brand}</h2>
        <img src={props.logo} />
    </div>);
}

function Content({ fName, lName }) {
    return (<div>
        <h1> Iam in the content component</h1>
        <h2>
            {fName}-
            {lName}
        </h2>
    </div>
    );
}

function Footer(props) {
    let { name, age } = props;
    return (<div>
        <h1> Iam in the Footer component</h1>
        <h2>name:{name},
            age:{age}
        </h2>
    </div>);
}



ReactDOM.render(<div><Header logo="logo.jpg" brand="Lamborghini" /><Content fName="akshata" lName="naik" /><Footer name="akshata" age="22" /></div>, document.getElementById("container"));