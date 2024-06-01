import { useState } from "react";

// idr hum key jo object se aa rhi hai vo card mai map kr rhe hai, uske sath removeTour funtion bhi aa rha hai
function Card({ id, image, info, price, name, removeTour }) {
  //idr hum readmore or readless ko manage kr rhe hai, by-default readmore ko hum false consider kr rhe hai using useState.
  const [readmore, setReadmore] = useState(false);

  //   idr humne info ke paragraph ko 200 words me show kiya by substring method, isse kya hog by-default 200 words ka paragraph show hoga and readmore pr click krne pr vo info ka pura data show karega.
  const description = readmore ? info : `${info.substring(0, 200)}.....  `;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="img"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
      </div>
      <div className="description">
        {description}
        <span className="read-more" onClick={readmoreHandler}>
          {readmore ? `  Show Less` : `  Read More`}
        </span>
      </div>

      {/* ye jo function hai {() => removeTour(id)} ye tabhi execute hoga jub click karegai jo {(removeTour(id)} iss trah likhe hote hai without arrow function vo page render hone pr execute hote hai, jitne baar page render hoga utne baar execute hoga */}

      {/* Imp 
      removeTour child to parent move ho rha hai
      => idr se Id app.js file me jayegi udr vo particular card data se remove ho jayega and new data useState ke trough frontend pr show ho jayega */}

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
