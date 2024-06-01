// About project
// idr hum CSS index.css ke through use kr rhe hai
// css teen type se use kiya 1.seperate css file bna ke hur component ki 2. tailwind 3. index.css ke through

// iss project mei humne child to parent flow use kiya using prop and parent to child using prop.Separate separate components banye, map and filter use kiya.

import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    // idr hum filter method use kr ke new array me vo tour save kr rhe hai jinki id match nhi ho rhi hai, phir iss newTour ke array ko hum front-end pr show kr rhe hai after removing the card.

    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // ye jub hum sare card remove kr daite hai us smye refresh krne ka option

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        {/* idr refresh btn click krne pr vapas se tour ka data show kr diya hai */}
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    // parent Div
    <div className="App">
      {/* idr hum props me data ke sath funtion bhi bhej rhe hai so child to parent data flow ho sake */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
