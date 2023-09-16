/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiFillDollarCircle, AiFillBook } from "react-icons/ai";
import Card from "../card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [courseCard, setCourseCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [totalHour, setTotalHour] = useState([]);
  const [remainingHour, setRemainingHour] = useState([20]);
  const [totalPrice, setTotalPrice] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => setCourseCard(data));
  }, []);
  const handleSelect = (card) => {
    const isExist = selectedCard.find((item) => item.id == card.id);
    let hourCount = card.credit;
    let priceCount = card.price;

    if (isExist) {
      return toast("ALREADY SELECTED");
    } else {
      selectedCard.forEach((items) => {
        priceCount += items.price;
      });
      setTotalPrice(priceCount);

      selectedCard.forEach((item) => {
        hourCount += item.credit;
      });
      const remainingHour = 20 - hourCount;
      if (hourCount > 20) {
        return toast("YOU CAN NOT ADD MORE CREDIT");
      } else {
        setTotalHour(hourCount);
        setRemainingHour(remainingHour);
        setSelectedCard([...selectedCard, card]);
      }
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Course Registration</h1>
      <div className="mt-10 flex">
        <div
          key={courseCard.id}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-2/3 gap-5"
        >
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
                  <p className="text-base font-medium">
                    Credit:{card.credit}hr
                  </p>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelect(card)}
                    className="btn btn-success w-full"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3 border-red-500">
          <Card
            selectedCard={selectedCard}
            remainingHour={remainingHour}
            totalHour={totalHour}
            totalPrice={totalPrice}
          ></Card>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
