"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  date: z.string().min(1, { message: "Огноо оруулна уу" }),
  img: z.instanceof(File).refine(
    (file) => {
      console.log(file);
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      return allowedExtensions.includes(file[0].type.split("/")[1]);
    },
    { message: "Зурган файл оруулна уу" }
  ),
});

const [preview, setPreview] = useState(null);

export const Step2 = ({ handleContinue }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: "",
      img: null,
    },
  });
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <form onSubmit={handleSubmit(handleContinue)}>
        <div className="flex flex-col relative w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
          <div className="flex flex-col gap-[8px] mb-[28px]">
            <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
            <div className="text-[26px] text-[#202124]">
              <b>Join Us! 😎</b>
            </div>
            <div className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </div>
          </div>

          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Date <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              {...register("date")}
              type="date"
              className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                errors.date ? "border-red-600" : "border-[#8B8E95]"
              }`}
            />
            {errors.date && (
              <div className="text-red-600 text-sm">{errors.date.message}</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155] mt-[4px]">
            <div className="flex gap-[4px] font-semibold">
              Profile Image <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              {...register("img")}
              type="file"
              className="flex flex-col justify-center items-center w-[416px] h-[180px] p-[12px] rounded-md mt-[12px] divide-none bg-[#7F7F800D]"
              onChange={() => {
                handleImage;
              }}
            />
            {errors.img && (
              <div className="text-red-600 text-sm">{errors.img.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
          >
            Submit <ArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
