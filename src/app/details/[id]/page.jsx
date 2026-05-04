import BorrowBtn from "@/component/shear/BorrowBtn";
import { bookdetails } from "@/lib/data";
import Image from "next/image";
import { toast } from "react-toastify";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const details = await bookdetails(id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white shadow-xl rounded-3xl p-8">

          <div className="w-full h-[420px] flex items-center justify-center bg-gray-100 rounded-3xl">
            <Image
              src={details.image_url}
              alt={details.title}
              width={500}
              height={600}
              className="max-h-full max-w-full object-contain"
            />
          </div>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-[#2F5848]">{details.title}</h1>

          <p className="text-lg text-gray-500">
            by{" "}
            <span className="font-semibold text-gray-800">
              {details.author}
            </span>
          </p>
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#A77E55]/10 text-[#A77E55] font-medium">
            {details.category}
          </span>

          <p className="text-gray-700 leading-relaxed">{details.description}</p>

          <p className="text-green-600 font-semibold text-lg">
            {details.available_quantity} copies available
          </p>

          
          <BorrowBtn/>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;
