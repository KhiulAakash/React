// Home.js
import React, { useContext, useState } from "react";
import "./style.css";
import UserContext from "../../Context/UserContext";

const Home = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [display, setDisplay] = useState("none"); // Set initial display for the home
  const [displayDetails, setDisplayDetails] = useState("block");

  const handleSubmit = () => {
    if (fullname === "" || email === "" || address === "") return;

    setUser({ fullname, email, address }); // Move setUser here
    setDisplay("block");
    setDisplayDetails("none");
  };

  return (
    <div className="homeComponent" style={{ backgroundColor: user ? "#242424" : "white" }}>
      <div className="displayDetails" style={{ display: displayDetails }}>
        <div className="details">
          <h1 style={{ color: user ? "white" : "black" }}>Details</h1>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>

      <div className="home" style={{ display: display, color: user ? "white" : "black" }}>
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore cum sapiente quo porro facilis earum numquam! Nesciunt, quidem veritatis molestiae praesentium a quo officia doloribus necessitatibus, nostrum, aliquam harum voluptate!
          Assumenda odio tempora sapiente? Iusto veritatis eius iste ad vitae. Fugiat odio, qui enim, saepe sequi officia ea modi quos ratione et minus atque debitis ipsam inventore delectus tempore earum?
          Eius iure porro, dignissimos accusantium est illo, esse dolor incidunt totam dolore quia quasi facilis nostrum maxime ut tenetur at. Reiciendis voluptas fugiat soluta iure quibusdam minus dolore architecto molestiae.
          Quaerat vel earum magnam quos fuga, facere provident maiores neque! Magni repellendus molestiae voluptas nulla fugit aliquam. Quo, expedita iure. Consequuntur quidem nihil quod. Itaque hic facilis perspiciatis distinctio aliquam.
          Quidem quo eaque illo enim laudantium consequuntur veniam, vitae culpa maxime ratione sed repellat at excepturi dicta praesentium libero consequatur voluptatem saepe! Veniam, eos incidunt quod perferendis qui vitae nobis.
          Sed nulla magni laborum voluptas deserunt reprehenderit cupiditate doloribus facere, unde dolorem vel ratione corporis ducimus soluta! Itaque excepturi eveniet praesentium, corrupti aut labore voluptates a tempore officia consequatur minima?
          Odio quasi nihil praesentium possimus, ratione eligendi cum dolores minima reprehenderit dolorem qui architecto dignissimos facere vitae aperiam temporibus. Fugiat sit commodi praesentium et voluptate provident ullam itaque nihil alias.
          Natus voluptatem, odit reprehenderit ullam quae, laudantium quod esse illum necessitatibus officiis neque libero ab ea aliquam amet non assumenda accusantium quo voluptates. Quia enim a perferendis aliquid eius accusamus.
          Aliquam excepturi optio rem, tenetur doloribus ipsa quasi fuga quis aperiam est debitis dolores atque totam repellat eos. Iusto illum odio modi quis saepe ad, autem nemo at quidem earum.
          Molestiae harum voluptas, laborum, quo optio minima, dicta nostrum ab cumque dolor dolore. Ipsum nesciunt eveniet dolores vel aut reiciendis culpa vitae ipsam facere iusto adipisci, alias quasi similique fuga!
        </p>
      </div>
    </div>
  );
};

export default Home;
