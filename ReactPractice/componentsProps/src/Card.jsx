import "./styles.css";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt="" />
      <p>NETFLIX ORIGINAL SERIES</p>
      <h3>{props.movieName}</h3>
      <div className="btn">
        <a href={props.movieLink}>
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}
