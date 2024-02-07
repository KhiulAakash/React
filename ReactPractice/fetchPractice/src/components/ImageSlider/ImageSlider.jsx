import React, { useEffect, useState } from 'react';
import './style.css';

export default function ImageSlider() {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let res = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        let data = await res.json();
        setImagesData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [index]);

  if (loading || imagesData.length === 0) {
    return <h1 id='loading'>Loading....</h1>;
  }

  // Ensure the index is within bounds
  const currentIndex = (index + imagesData.length) % imagesData.length;

  return (
    <div id='body'>
      <img src={imagesData[currentIndex].download_url} alt='' />
      <button id='left' onClick={() => setIndex((index - 1+imagesData.length)+imagesData.length)}>
        Left
      </button>
      <button id='right' onClick={() => setIndex(index + 1)}>
        Right
      </button>
    </div>
  );
}
