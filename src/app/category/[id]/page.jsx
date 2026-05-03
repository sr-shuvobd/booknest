import Category from "@/component/book/Category";
import Card from "@/component/shear/Card";
import { category } from "@/lib/data";
import { allbooks, categories } from "@/lib/data";

const CategoryPage = async ({ params }) => {
  const { id } = await params;
  const categorys = await category(id);
  const categorie = await categories();

  return (
    <div className="container mx-auto m-7">
      {/* book  */}
      <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-10">
        {/* category */}
        <div>
          <Category categorie={categorie} activeId={id} />
        </div>

        {/* book  */}
        <div className=" col-span-4 p-6 bg-gray-100 rounded-2xl">
          <h1 className="text-xl font-bold mb-5">
            Books
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categorys.map((book) => {
              return (
                <div key={book.id}>
                  <Card book={book} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
