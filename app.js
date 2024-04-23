import React from "react";
import ReactDOM from "react-dom/client";
//Jsx element 
/*
const heading =<h1>Hello karthik from JSx </h1>;
console.log(heading);
*/
/*

root.render(heading)
*/

//React Component compositon (component in component)

const HeadingComponent=()=> <h1>Hello karthik from functional component</h1>;
const Title=()=>(
    <div id="container">
        {<HeadingComponent />}
        <h1 className="head">Hi from Title</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);

//Component compostion element in component
/*
const heading= <h1>Hello karthik from functional component</h1>;
const Title=()=>(
    <div id="container">
        {heading}
        <h1 className="head">Hi from Title</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
*/

//Element compostion
/*
const heading= <h1>Hello karthik from functional component</h1>;
const title=(
    <div id="container">
        {heading}
        <h1 className="head">Hi from Title</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/