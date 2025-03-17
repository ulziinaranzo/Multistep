"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

export const Step3 = () => {
  const { saveData, setSaveData } = useContext(SaveContext);

  <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
    <div className="flex flex-col relative w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
      <div className="flex flex-col gap-[8px] mb-[28px]">
        <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
        <div className="text-[26px] text-[#202124]">
          <b>You Are All Set! 🤩</b>
        </div>
        <div className="text-[black] text-[18px]">
          We've received your submission. Thank you! ❤️
        </div>
      </div>
    </div>
  </div>;
};

// .refine(
//   (date) => {
//     Split = Dates.value.split("/")
//     if (Split[2] < 2007)
//   }, {
// message: "Та 18 ба түүнээс дээш настай байх ёстой."}
// ),
