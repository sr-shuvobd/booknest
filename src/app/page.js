import Card from "@/component/shear/Card";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const allbooks = async () => {
  const les = await fetch("https://booknest-server-q5cs.onrender.com/books");
  const data = await les.json();
  return data;
};

export default async function Home() {
  const books = await allbooks();

  return (
    <div>
      {/* banner  */}
      <section className="container mx-auto mt-6 px-4 rounded-xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#F6EFE6] min-h-[420px] flex items-center">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#A77E55]/25"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2F5848]/20"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center px-8 md:px-14 py-14 w-full">
            <div className="space-y-6">
              <p className="text-[#A77E55] font-semibold tracking-wide">
                WELCOME TO BOOKNEST
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#2F5848]">
                Find Your <br /> Next Read
              </h1>

              <p className="text-gray-600 max-w-md">
                Explore your favorite books and start your reading journey with
                a clean and simple borrowing experience.
              </p>

              <Link href="/allbooks">
                <button className="px-8 h-12 rounded-full bg-[#2F5848] text-white font-semibold hover:bg-[#244638] hover:scale-105 transition-all duration-300 shadow-lg">
                  Browse Now
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 h-80 rounded-3xl bg-white shadow-2xl p-5 rotate-3">
                <div className="h-full rounded-2xl bg-[linear-gradient(135deg,#2F5848,#A77E55)] flex items-center justify-center text-white text-6xl">
                  📚
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marquee */}
      <div className="container mx-auto text-2xl p-6 bg-green-300 m-2 rounded-xl">
        <Marquee pauseOnHover={true}>
          <p className="mr-10">
            এই, তোমরা কেমন আছো ? পড়াশোনা করোতো ? করতে হবে।
          </p>
          <p className="mr-70">
            আমাদের এই ওয়েবসাইটে তোমরা পড়ার জন্য অসংখ্য বই পেয়ে যাবে।
          </p>
        </Marquee>
      </div>
      {/* book */}
      <div className="container mx-auto bg-gray-100 rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Books</h2>

        <div className="grid grid-cols-4 gap-7">
          {books.slice(0, 4).map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
