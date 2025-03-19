// "use client";
// import { ArrowIcon } from "@/assets/Arrow-Icon";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion } from "framer-motion";

// export const schema = z.object({
//   date: z.string().min(1, { message: "Огноо оруулна уу" }),
//   img: z.instanceof(FileList).refine(
//     (files) => {
//       const file = files[0];
//       const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
//       return allowedExtensions.includes(file.type.split("/")[1]);
//     },
//     { message: "Зурган файл оруулна уу" }
//   ),
// });

// export const Step2 = ({ handleContinue, handlePrev }) => {
//   const { saveData, setSaveData } = useContext(SaveContext);

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
//     setValue,
//   } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       date: "",
//       img: null,
//     },
//   });

//   const { img } = watch();

//   const onSubmit = (data) => {
//     console.log("Form data submitted: ", data);
//     handleContinue(data);
//   };

//   const handleAnimation = {
//     initial: { opacity: 0, x: -100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 100 },
//     transition: { duration: 0.5 },
//   };

//   return (
//     <motion.div
//       className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]"
//       variants={handleAnimation}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition="transition"
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex flex-col relative w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
//           <div className="flex flex-col gap-[8px] mb-[28px]">
//             <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
//             <div className="text-[26px] text-[#202124]">
//               <b>Join Us! 😎</b>
//             </div>
//             <div className="text-[#8E8E8E] text-[18px]">
//               Please provide all current information accurately.
//             </div>
//           </div>

//           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//             <div className="flex gap-[4px] font-semibold">
//               Date <div className="flex text-[#E14942]">*</div>
//             </div>
//             <input
//               {...register("date")}
//               type="date"
//               className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
//                 errors.date ? "border-red-600" : "border-[#8B8E95]"
//               }`}
//             />
//             {errors.date && (
//               <div className="text-red-600 text-sm">{errors.date.message}</div>
//             )}
//           </div>

//           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155] mt-[4px]">
//             <div className="flex gap-[4px] font-semibold">
//               Profile Image <div className="flex text-[#E14942]">*</div>
//             </div>
//             <input
//               {...register("img")}
//               type="file"
//               className="w-[416px] h-[44px] p-[12px] rounded-md mt-[12px] bg-[#7F7F800D]"
//             />
//             {errors.img && (
//               <div className="text-red-600 text-sm">{errors.img.message}</div>
//             )}

//             <div className="flex justify-center mt-4">
//               {img && (
//                 <img
//                   className="w-full h-[200px] object-cover rounded-[10px]"
//                   src={URL.createObjectURL(img[0])}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex gap-[8px]">
//             <button
//               type="button"
//               onClick={handlePrev}
//               className="flex justify-center items-center bg-[white] rounded-[6px] text-[black] h-[44px] w-[416px] mt-[10px] border border-[#CBD5E1]"
//             >
//               Back
//               <ArrowIcon />
//             </button>
//             <button
//               type="submit"
//               className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
//             >
//               Submit <ArrowIcon />
//             </button>
//           </div>
//         </div>
//       </form>
//     </motion.div>
//   );
// };

"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { date, z } from "zod";
import { motion } from "framer-motion";
import { SaveContext } from "./saveDataProvider";
import { BackArrowIcon } from "@/assets/Back-Arrow-Icon";

export const schema = z.object({
  date: z.string().min(1, { message: "Огноо оруулна уу" }).refine((date) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - inputDate.getFullYear();
    return age >= 18;
  }, { message: "Та 18 ба түүнээс дээш настай байх ёстой" }),
  img: z
    .custom((files) => {
      if (!files || files.length === 0) return false;
      const file = files[0];
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      return allowedExtensions.includes(file.type.split("/")[1]);
    })
    .refine((isValid) => isValid, { message: "Зурган файл оруулна уу" }),
});

export const Step2 = ({ handleContinue, handlePrev }) => {
  const { saveData } = useContext(SaveContext);
  const { updateSaveData } = useContext(SaveContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: saveData?.date || "",
      img: saveData?.img || null,
    },
  });

  const img  = watch("img");

  const onSubmit = (data) => {
    handleContinue(data);
    updateSaveData(data);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex flex-col relative gap-[8px] text-[14px] text-[#334155] mt-[4px]">
            <div className="flex gap-[4px] font-semibold">
              Profile Image <div className="flex text-[#E14942]">*</div>
            </div>
            
            <input
              {...register("img")}
              type="file"
              className="relative w-[416px] h-[44px] p-[12px] rounded-md mt-[12px] bg-[#7F7F800D]"
            />
            <div className="flex flex-col absolute gap-[8px] right-[200px] top-[200px]">
              <img className="w-[28px] h-[28px] ml-[20px]"/>
              <div className="text-[14px] font-medium">Add image</div>
            </div>
            {errors.img && (
              <div className="text-red-600 text-sm">{errors.img.message}</div>
            )}

            <div className="flex justify-center mt-4">
              {img?.length > 0 && (
                <img
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  src={URL.createObjectURL(img[0])}
                />
              )}
            </div>
          </div>

          <div className="flex gap-[8px]">
            <button
                          type="button"
                          onClick={handlePrev}
                          className="flex justify-center items-center text-center bg-[white] rounded-[6px] text-[black] h-[44px] w-[128px] mt-[10px] border border-[#CBD5E1] text-[16px]"
                        >
                          <BackArrowIcon /> Back 
                        </button>
                        <button
                          type="submit"
                          className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px] text-[16px]"
                        >
                          Continue 2/3 <ArrowIcon />
                        </button>
          </div>
        </div>
      </form>
    </div>
  );
};
