import { puppyList } from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(id) {
    setFeatPupId(id);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="app">
      <div className="puppylist">
        {puppies.map((puppy) => {
          return (
            <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && (
        <div className="puppyinfo">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
