/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiFillDollarCircle, AiFillBook } from "react-icons/ai";

const Home = () => {

    const [courseCard, setCourseCard] = useState([]);
    useEffect(()=>{
        fetch('../../../public/fake.json')
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
  return (
    <div>
      <h1 className="text-3xl font-bold">Course Registration</h1>
      <div className="mt-10">
        <div className="grid grid-cols-3 w-2/3 gap-2">
          <div className="card  bg-white shadow-xl">
            <figure className="px10 pt10">
              <img
                src="https://i.ibb.co/fkyTXTW/Rectangle-3.png"
                alt=""
                className="rounded-xl m-4"
              />
            </figure>
            <div className="">
              <h2 className="font-semibold text-left text-black mb-3">
                Introduction to C Programming
              </h2>
              <p className="text-base font-normal text-black text-left mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex justify-evenly mb-6 items-center">
                <span className="text-xl text-gray-600 font-bold">
                  <AiFillDollarCircle></AiFillDollarCircle>
                </span>
                <p className="text-base font-medium">Price:</p>
                <span className="text-xl text-gray-600 font-bold">
                  <AiFillBook></AiFillBook>
                </span>
                <p className="text-base font-medium">Credit: 0 hour</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-success w-full">Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
