import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  // console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
