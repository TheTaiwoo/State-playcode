import React from "react";

function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
 document.getElementById("root").style.textDecoration = null;
}

function App() {
  return(
    <div>
   <p>Buy Milk</p>
   <button onClick={strike}>Strike Through</button> 
   <br />
   <button onClick={unStrike}>Change Back</button>
   </div>
  );
}

export default App;