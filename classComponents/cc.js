//COMPONENTS-Independent set of codes
//It is developed individually and code can be reusable
// 2 types==>1.class components
//2.functional components
//to create a component you should follow the pascle case
//jsx rules
//if we have more than two elements we have to wrap it inside the paranthesis
//if more than one element is there in the component then you have to wrap it inside parent element

//class components has class keyword
//and mandatory to have render

class Header extends React.Component {
    render() {
        return <h1>iam a new header</h1>;
    }
}
ReactDOM.render(<Header />, document.getElementById("container"));

class Head extends React.Component {
    render() {
        console.log(this.props.firstName);
        console.log(this.props.lastName);
        return (
            <div>
                <div>
                    <h1>iam a new header</h1>;
                    <p>iam inside it</p>
                    <h3>hello{this.props.firstName}</h3>
                </div>
            </div>)
    }
}

ReactDOM.render(<Head />, document.getElementById("container"));

class Content extends React.Component {
    render() {
        return <h1>hello iam content page</h1>;
    }
}

ReactDOM.render(<div><Head firstName="Akshata" lastName="Naik" /><Content /></div>, document.getElementById("container"));

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <h3>this is akshata</h3>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById("container"));

class Continent extends React.Component {
    render() {
        console.log(this.props.content);
        return (<div>
            <h1>content page</h1>
            <h3>hello {this.props.content}</h3>
        </div>)
    }
}

ReactDOM.render(<Continent content="This is an jsx file" />, document.getElementById("container"));
