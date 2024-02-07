import Card from "./Card";
import Footer from "./Footer";
import data from "./data";
import "./styles.css";

export default function App() {
  return (
    <>
      <Footer />
      <div className="cards1">
        <Card
          movieName={data[0].movieName}
          imgSrc={data[0].imgSrc}
          movieLink={data[0].movieLink}
        />
        <Card
          movieName={data[1].movieName}
          imgSrc={data[1].imgSrc}
          movieLink={data[1].movieLink}
        />
        <Card
           movieName={data[2].movieName}
           imgSrc={data[2].imgSrc}
           movieLink={data[2].movieLink}
        />
      </div>
      <div className="cards2">
        <Card
           movieName={data[3].movieName}
           imgSrc={data[3].imgSrc}
           movieLink={data[3].movieLink}
        />
        <Card
           movieName={data[4].movieName}
           imgSrc={data[4].imgSrc}
           movieLink={data[4].movieLink}
        />
        <Card
           movieName={data[5].movieName}
           imgSrc={data[5].imgSrc}
           movieLink={data[5].movieLink}
        />
      </div>
    </>
  );
}
