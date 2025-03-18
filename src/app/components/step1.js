"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { SaveContext } from "./saveDataProvider";

export const schema = z.object({
  phone: z
    .string()
    .length(8, { message: "8 оронтой тоо оруулна уу" })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) =>
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)
        );
      },
      { message: "Зөвхөн тоо оруул" }
    ),
  email: z.string().email({ message: "Имэйлээ зөв оруулна уу" }),
  password: z.string().min(1, { message: "Нууц үгээ оруулна уу" }).min(7, {
    message: "7-с дээш үсэг, тоо, тэмдэгт бүхий нууц үг оруулна уу",
  }),
  confirmPassword: z
    .string()
    .min(1, { message: "Нууц үгээ давтан оруулна уу" })
    .refine((value, context) => value !== context?.parent?.password, {
      message: "Нууц үг таарахгүй байна",
    }),
});
export const Step1 = ({ handleContinue, handlePrev }) => {
  const { saveData } = useContext(SaveContext);
  const { updateSaveData } = useContext(SaveContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: saveData?.email || "",
      phone: saveData?.phone || "",
      password: saveData?.password || "",
      confirmPassword: saveData?.confirmPassword || "",
    },
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <form
        onSubmit={handleSubmit((data) => {
          handleContinue(data);
          updateSaveData(data);
        })}
      >
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
                Phone Number <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.phone ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.phone && (
                <div className="text-red-600 text-sm">
                  {errors.phone.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Email Address <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.email ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.email && (
                <div className="text-red-600 text-sm">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Password <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.password ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.password && (
                <div className="text-red-600 text-sm">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Confirm Password <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
                  errors.password ? "border-red-600" : "border-[#8B8E95]"
                }`}
              />
              {errors.confirmPassword && (
                <div className="text-red-600 text-sm">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-[8px]">
            <button
              type="button"
              onClick={handlePrev}
              className="flex justify-center items-center text-center bg-[white] rounded-[6px] text-[black] h-[44px] w-[128px] mt-[10px] border border-[#CBD5E1]"
            >
              Back <ArrowIcon />
            </button>
            <button
              type="submit"
              className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
            >
              Continue 2/3 <ArrowIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
