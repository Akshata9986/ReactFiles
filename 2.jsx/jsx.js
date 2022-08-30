//jsx
//it is a javascript xml
//babel will convert jsx to browser understandable code.

console.log("started");
const element = <h1>hello world</h1>;  //jsx way of creating an element
console.log(element);

const names = "nuthana";
const h1Element = <h1>hello {names}</h1>;//hello nuthana
ReactDOM.render(h1Element, document.getElementById("container"));


const mobiles = ["one+", "realme", "redmi", "iphone", "samsung"];
const loopingData = mobiles.map((value, index) => {
    return <h1 key={index}>{value}</h1>;
});
ReactDOM.render(loopingData, document.getElementById("container"));

const ulElement = (
    <ul>
        {mobiles.map((value, index) => {
            return <li key={index}>{value}</li>;
        })}
    </ul>
)

const allItems = React.createElement("div", null, ulElement, loopingData, h1Element);
ReactDOM.render(allItems, document.getElementById("container"));