import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Card from "../../Card";

const LeftSide = () => {
    const [category,setcategory]=useState([])
 
    useEffect (()=>{
  fetch('categories.json')
  .then(res => res.json())
  .then(data => setcategory(data))
    },[])



    return (
        <div>
            <h1 className="text-2xl font-medium ml-2">All Categories</h1>
            {
                category.map(category => <Link className="block p-4 font-semibold  border-gray-400 hover:bg-gray-500 rounded-lg" key={category.id}>
                {category.name}
                </Link>)
            }
          
        </div>
    );
};

export default LeftSide;