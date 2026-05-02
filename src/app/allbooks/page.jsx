import Card from "@/component/shear/Card";
import { allbooks, categories } from "@/lib/data";
import React from "react";

const AllbookPage = async() => {
 const books = await allbooks();
 const categorie = await categories()
  return (
    <div className="container mx-auto m-7">
        {/* search  */}
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {/* book  */}
        <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-10">
            {/* category */}
            <div className=" col-span-1 shadow p-5 rounded-2xl">
                <h1 className="text-xl font-bold mb-5">Browse by Category</h1>
                {
                    categorie.map((c) => {      
                       return <ul key={c.id} className="">
                            <li className="bg-green-100 mb-3 p-2">{c.category}</li>
                        </ul>
                    })
                }
            </div>
                {/* book  */}
            <div className=" col-span-4 p-6 bg-gray-100">
                <h1 className="text-xl font-bold mb-5">All Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        books.map((book) => <Card key={book.id} book={book}/>)
                    }
                </div>
            </div>
        </div>
    </div>
  );
};

export default AllbookPage;
