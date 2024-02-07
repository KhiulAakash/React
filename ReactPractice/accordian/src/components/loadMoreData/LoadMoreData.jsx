import React, { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const[disableBtn,setDisableBtn]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let res = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count == 0 ? 0 : count * 20
          }`
        );
        let data = await res.json();
        setProductsData((prevData)=>[...prevData,...data.products]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [count]);

  useEffect(()=>{
    if(productsData && productsData.length==100)setDisableBtn(true);
  },[productsData])
  if (loading) return <div>Loading..</div>;
  console.log(productsData);
  
  return (
    <div id="body">
      <div className="container">
      {productsData.length ? (
        productsData.map((val,ind) => (
          <div key={ind} id='product'>
            <img src={val.images[0]}/>
            <h2>{val.title}</h2>
            <p>{val.description}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
      </div>
      <button disabled={disableBtn} onClick={() => setCount(count + 1)}>{productsData.length==100?"No more product":"Load More..."}</button>
    </div>
  );
}
