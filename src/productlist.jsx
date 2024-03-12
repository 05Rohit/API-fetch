import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [data,setData]=useState('')


  useEffect(() => {
    // Fetch data from the API
    const res = fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
    console.log(res);
  }, []);
  


  function searchData(event) {
    const searchValue = event.target.value;
    setData(searchValue);
    if(!searchValue)
    {
      setProducts(products)
    }
    else{
      const filteredProducts = products.filter((item) => {
        // Assuming item.Title contains the movie name
        return item.Title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setProducts(filteredProducts)

    }
  }

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

            <li className=" hover:text-cyan-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-cyan-500 cursor-pointer">Registration</li>
            <li className="hover:text-cyan-500 cursor-pointer">Login</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center bg-black ">
        <input type="search" value={data} placeholder="Search the movie name" className="rounded-sm border-none py-1 px-2 w-[600px]" onChange={searchData} />
      </div>

      <div className="right pt-5 flex flex-wrap gap-14 justify-center bg-black text-white ">

     
        {products &&
          products.map((el) => {
            return (
              <ProductCard
                key={el._id}
                images={el.Images[0]}
                title={el.Title}
                actor={el.Actors}
                dor={el.Released}
                year={el.Year}
                poster={el.Poster}
                genre={el.Genre}
                director={el.Director}
                rated={el.Rated}
                runtime={el.runtime}


            
               
              />
            );
          })}
      </div>

     
    </div>
  );
}

export default ProductList;
