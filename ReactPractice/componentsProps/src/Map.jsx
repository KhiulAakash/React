import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import data from "./data";
import "./styles.css";

export default function Map() {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const ageInput = prompt("Enter your age:");
    setAge(ageInput);
  }, []);

  const cardsAva = () => {
    return data.map(getCards);
  };

  const noCard = () => {
    alert(`No information available for ${age} years old.`);
  };

  const getCards = (value) => {
    return (
      <Card
        key={value.id}
        movieName={value.movieName}
        imgSrc={value.imgSrc}
        movieLink={value.movieLink}
      />
    );
  };

  return (
    <>
      <Footer />
      <div className="cards">
        {age > 17 ? cardsAva() : noCard()}
      </div>
    </>
  );
}
