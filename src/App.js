import logo from "./logo.svg";
import "./App.css";

function App() {
  let a = 10;
  let i;
  for (i = 0; i < 10; i++) {
    a = a + i;
  }

  // a comment herer
  /*
   * Multi
   * Line
   * Comment
   */

  const arr = ["bob", "jack", "robert"];
  //              0     1       2
  const obj = { name: "Ram", city: "xyz", mobile: "34325343" };

  // Object.keys(obj) = [name,city]

  const arr2 = ["angel2", "bob2", "jack2"];

  const arr3 = Object.keys(obj);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {arr.map((x, i) => {
          return <h1 key={i}> {x} </h1>;
        })}

        <p>Name : {obj.name}</p>
        <p>City : {obj.city}</p>

        {arr3.map((item, index) => {
          return (
            <p className="para" key={index}>
              {item.charAt(0).toUpperCase() + item.slice(1)} : {obj[item]}
            </p>
          );
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
