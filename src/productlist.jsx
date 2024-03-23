import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // Fetch data from the API
    const res = fetch(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
      console.log(res);
  }, []);

  return (
    <div className="app">
      <div className="flex justify-between text-center shadow-md  h-16 bg-black text-white">
        <nav className=" flex text-center justify-center p-5 text-2xl   ">
          Navbar
        </nav>

        <div className="flex text-center justify-center px-12">
          <ul className="flex gap-10  text-center justify-center p-5 text-[21px] ">
            <li className=" hover:text-cyan-500 cursor-pointer">
              Home <span className="sr-only">(current)</span>
            </li>
            <li className="hover:text-cyan-500 cursor-pointer">Login</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center bg-black ">
        <input
          type="search"
          value={searchData}
          placeholder="Search the Movie "
          className="rounded-md border-none py-1 px-5 w-[600px]"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <div className="right pt-5 flex flex-wrap gap-14 justify-center bg-black text-white ">
        {products
          .filter((el) => {
            return searchData.toLowerCase() === ""
              ? el : el.Title.toLowerCase().includes(searchData.toLowerCase());
          })
          .map((el) => (
            <ProductCard
              key={el._id}
              images={el.Images[0]}
              title={el.Title}
              type={el.Type}
              actor={el.Actors}
              dor={el.Released}
              year={el.Year}
              poster={el.Poster}
              genre={el.Genre}
              director={el.Director}
              rated={el.Rated}
              runtime={el.Runtime}
              language={el.Language}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
