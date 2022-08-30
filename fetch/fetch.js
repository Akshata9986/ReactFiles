class Home extends React.Component {
    state = {
        data: [],
    };

    fetchDataFunc = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((fetchData) => {
                this.setState({ data: fetchData });
                console.log(this.state.fetchData);
            })


            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>

                <button onClick={() => { this.fetchDataFunc(); }}>click</button>
                {/* 
                {this.state.data.map((value, ind) => {
                    return <table key={ind}> {value.title}</table>
                })} */}

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((users, value, index) => {
                            <tr>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById("container"));