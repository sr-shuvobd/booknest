"use client";

import Category from "@/component/book/Category";
import Card from "@/component/shear/Card";
import { useEffect, useState } from "react";

const AllbookPage = () => {

  const [books, setBooks] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://booknest-server-q5cs.onrender.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));

    fetch("https://booknest-server-q5cs.onrender.com/bookCategories")
      .then((res) => res.json())
      .then((data) => setCategorie(data));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="container mx-auto m-7">

      <div className="flex items-center justify-center">
        <label className="input">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-10">

        <div>
          <Category categorie={categorie} activeId={null} />
        </div>

        <div className="col-span-4 p-6 bg-gray-50 rounded-2xl">
          <h1 className="text-xl font-bold mb-5">All Books</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default AllbookPage;