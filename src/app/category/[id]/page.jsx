
import Category from '@/component/book/Category';
import Card from '@/component/shear/Card';
import { category } from '@/lib/data';
import { allbooks, categories } from "@/lib/data";
import React from 'react';

const CategoryPage = async ({ params }) => {
    const {id} = await  params;
    const categorys = await category(id)
     const categorie = await categories()
    
    return (
        <div className="container mx-auto m-7">
        {/* search  */}
      <div className="flex items-center justify-center">
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
            <div>
              <Category categorie={categorie} activeId={id}/>
            </div>
            
                {/* book  */}
            <div className=" col-span-4 p-6 bg-gray-100">
                <h1 className="text-xl font-bold mb-5">All Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        categorys.map((book) => <Card key={book.id} book={book}/>)
                    }
                </div>
            </div>

        </div>
    </div>
        
    );
};

export default CategoryPage;