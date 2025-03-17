"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

export const schema = z.object({
  username: z.string().min(1, { message: "Хэрэглэгчийн нэрээ оруулна уу " }),
  firstName: z.string().min(1, { message: "Нэрээ оруулна уу" }),
  lastName: z.string().min(1, { message: "Овгоо оруулна уу" }),
});

export const Step = ({ handleContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
    },
  });

  const handleAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]"
      variants={handleAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      <form onSubmit={handleSubmit(handleContinue)}>
        <div className="flex flex-col w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
          <div className="flex flex-col gap-[8px] mb-[28px]">
            <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
            <div className="text-[26px] text-[#202124]">
              <b>Join Us! 😎</b>
            </div>
            <div className="text-[#8E8E8E] text-[18px]">
              Please provide all current information accurately.
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                First name <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("firstName")}
                placeholder="Нэрээ оруул"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.firstName ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.firstName && (
                <div className="text-red-600 text-sm">
                  {errors.firstName.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Last name <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("lastName")}
                placeholder="Your Name"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.lastName ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.lastName && (
                <div className="text-red-600 text-sm">
                  {errors.lastName.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Username <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("username")}
                placeholder="Your Username"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.username ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.username && (
                <div className="text-red-600 text-sm">
                  {errors.username.message}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
          >
            Continue 1/3 <ArrowIcon />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
