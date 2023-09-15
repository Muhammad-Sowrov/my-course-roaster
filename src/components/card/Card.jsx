/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const Card = ({ selectedCard, totalHour, remainingHour, totalPrice }) => {
  return (
    <div key={selectedCard[0]}>
      <h3 className="text-left text-lg font-bold ml-14 text-cyan-700">
        Credit Hour Remaining: {remainingHour}hr
      </h3>
      <h3 className="text-left text-lg font-bold ml-14">Course Name</h3>
      {selectedCard.map((card, idx) => (
        <ul key={card.id}>
          <li className="text-left ml-14 text-base font-normal ">
            {idx + 1}. {card.course_name}
          </li>
        </ul>
      ))}
      <h3 className="text-left text-lg font-bold ml-14">
        Total Credit Hour :{totalHour}
      </h3>
      <h3 className="text-left text-lg font-bold ml-14">
        Total Price: {totalPrice}USD
      </h3>
    </div>
  );
};

export default Card;
