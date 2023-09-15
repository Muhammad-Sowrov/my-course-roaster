/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({ selectedCard }) => {
    console.log(selectedCard);


    return (
        <div key={selectedCard[0]}>
            <h3 className='text-left text-lg font-bold ml-14'>Course Name</h3>
            {
                selectedCard.map((card)=>(
                    <ul key={card.id} className="list-decimal">
                        <li  className='text-left ml-14 text-base font-normal'>{card.course_name}</li>
                    </ul>
                    
                ))
            }
        </div>
    );
};

export default Card;