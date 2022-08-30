const listElement = React.createElement("ul", null, React.createElement("li", { className: "car", style: { color: "violet" } }, "car"),
    React.createElement("li", { className: "jeep", style: { color: "pink" } }, "jeep")
);

ReactDOM.render(listElement, document.getElementById("container"));

//looping map method

const mobiles = ["one+", "realme", "redmi", "iphone", "samsung"];
const mobileLoop = mobiles.map((mobiles, index) => {
    return React.createElement("li", { key: mobiles + index }, mobiles);

});
// ReactDOM.render(mobileLoop, document.getElementById("container"));
const allItems = React.createElement("div", null, listElement, mobileLoop);
ReactDOM.render(allItems, document.getElementById("container"));