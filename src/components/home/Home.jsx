/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiFillDollarCircle, AiFillBook } from "react-icons/ai";

const Home = () => {
  const [courseCard, setCourseCard] = useState([]);
  useEffect(() => {
    fetch("../../../public/fake.json")
      .then((res) => res.json())
      .then((data) => setCourseCard(data));
  }, []);
console.log(courseCard);
  return (
    <div>
      <h1 className="text-3xl font-bold">Course Registration</h1>
      <div className="mt-10 flex">
        <div key={courseCard.id} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-2/3 gap-5">
          {courseCard.map((card) => (
            <div key={card.id} className="w-64 shadow-xl rounded-md">
              <figure className="px10 pt10">
                <img
                  src={card.course_img}
                  alt=""
                  className="rounded-xl mb-4 p-2"
                />
              </figure>
              <div className="p-2">
                <h2 className="font-semibold text-left text-black mb-3">
                  {card.course_name}
                </h2>
                <p className="text-base font-normal text-black text-left mb-4">
                  {card.course_details}
                </p>
                <div className="flex justify-evenly mb-6 items-center">
                  <span className="text-xl text-gray-600 font-bold">
                    <AiFillDollarCircle></AiFillDollarCircle>
                  </span>
                  <p className="text-base font-medium">Price:{card.price}$</p>
                  <span className="text-xl text-gray-600 font-bold">
                    <AiFillBook></AiFillBook>
                  </span>
                  <p className="text-base font-medium">Credit:{card.credit}hr</p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-success w-full">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 border-red-500">
          <h3 className="border-red-700 text-5xl">fgshskjflskj</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
