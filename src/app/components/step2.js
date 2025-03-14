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
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      return allowedExtensions.includes("");
    },
    { message: "Зурган файл оруулна уу" }
  ),
});

export const step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: "",
      img: null,
    },
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <form onSubmit={handleSubmit(handleContinue)}>
        <div className="flex flex-col w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
          <div className="text-[26px] text-[#202124]">
            <b>Step 3: Final Info</b>
          </div>
          <div className="text-[#8E8E8E] text-[18px]">
            Add your final information here.
          </div>

          <input
            {...register("date")}
            type="date"
            className="w-[416px] h-[44px] border p-[12px] rounded-[8px] mt-4"
          />
          {errors.date && (
            <div className="text-red-600 text-sm">{errors.date.message}</div>
          )}

          <input
            {...register("img")}
            type="file"
            className="w-[416px] h-[44px] border p-[12px] rounded-[8px] mt-4"
          />
          {errors.img && (
            <div className="text-red-600 text-sm">{errors.img.message}</div>
          )}

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
