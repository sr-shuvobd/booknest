import Link from 'next/link';
import React from 'react';

const Category = ({categorie, activeId}) => {

    return (
        <div>
            <div className=" col-span-1 shadow p-5 rounded-2xl">
                <h1 className="text-xl font-bold mb-5">Browse by Category</h1>
                <ul className=''>
                {
                    categorie.map((c) => {      
                       return (<li key={c.id} className={`${c.id==activeId && "bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white"}  p-3 font-bold rounded-xl`}>
                        <Link href={`/category/${c.id}`} className='block'>
                        {c.category}
                        </Link>
                        
                        </li>)
                    })
                }
                </ul>
                
            </div>
        </div>
    );
};

export default Category;