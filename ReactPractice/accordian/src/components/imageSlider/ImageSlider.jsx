import { useEffect, useState } from "react";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingImages, setLoadingImages] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoadingImages(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoadingImages(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoadingImages(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url]);

  if (loadingImages) {
    return <div className="loading">Loading images! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div className="loading">Error occurred while fetching images! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <div onClick={handlePrevious} className="arrow arrow-left" style={{ cursor: "pointer" }}>
        Previous
      </div>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <div onClick={handleNext} className="arrow arrow-right" style={{ cursor: "pointer" }}>
        Next
      </div>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
