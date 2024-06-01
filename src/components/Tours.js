import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan Your Trip</h2>
      </div>

      <div className="cards">
        {/* idr hum mapping use kr rhe instant of loop,
      map each element pr function apply karega and new array create karega and imp thing is humko key bhi use krni hai.
      
      isme spread(...ABC) operator use kiya hai jo pure ek object ko send kr rha hai card mei.
      
      idr hum removeTour function bhi send kr rhe hai card ko 
      
      hum map curley braces mei likh rhe hai and function mei bhi curley braces use kr hai hai prop ko show krne kai liye on line 3 */}

        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
