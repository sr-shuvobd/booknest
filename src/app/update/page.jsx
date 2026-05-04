"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdatePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { name, photo } = data;

    const { data: res, error } = await authClient.updateUser({
      image: photo,
      name: name,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    if (res) {
      router.push("/myprofile");
      toast.success("Profile updated successfully");
    }
  };

  return (
    <div className="md:min-h-screen flex justify-center items-center bg-amber-50">
      <div className="shadow p-10 rounded-2xl bg-gray-50">
        <h1 className="font-bold text-2xl mb-3">
          Update Your Profile Information
        </h1>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Name</legend>
            <input
              {...register("name", { required: "Name is Required" })}
              type="text"
              className="input  w-full"
              placeholder="Enter your Name"
            />
          </fieldset>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Image URL</legend>
            <input
              {...register("photo", {
                required: "Image URL is Required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                  message: "Please enter a valid image URL",
                },
              })}
              type="text"
              className="input w-full"
              placeholder="Enter your Image URL"
            />
          </fieldset>
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}

          <button className="btn w-full mt-5 bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
