"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  username: z.string().min(1, { message: "Хэрэглэгчийн нэрээ оруулна уу " }),
  firstName: z.string().min(1, { message: "Нэрээ оруулна уу" }),
  lastName: z.string().min(1, { message: "Овгоо оруулна уу" }),
  password: z
    .string()
    .min(1, { message: "Нууц үгээ оруулна уу" })
    .min(7, {
      message: "7-с дээш үсэг, тоо, тэмдэгт бүхий нууц үг оруулна уу",
    }),
  confirmPassword: z
    .string()
    .min(1, { message: "Нууц үгээ давтан оруулна уу" })
    .refine((value, context) => value === context?.parent?.password, {
      message: "Нууц үг таарахгүй байна",
    }),

  date: z
    .string()
    .min(1, { message: "Огноо оруулна уу" }) 
    .refine((val) => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(val), {
      message: "Зөв огноо оруулна уу (yyyy-mm-dd)",
    }),
  img: z
    .instanceof(File)
    .refine((file) => {
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      return allowedExtensions.includes(fileExtension || "");
    }, {
      message: "Зураг файл оруулна уу (.jpg, .jpeg, .png, .gif)",
    })
    .optional(), 
});

export default function Home() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      date: "",
      img: null,
    },
  });

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleContinue = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep((prev) => prev + 1); // Increase step after successful validation
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <form onSubmit={handleSubmit(handleContinue)}>
        {step === 1 && (
          <div className="flex flex-col w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
            <div className="flex flex-col gap-[8px]">
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
        )}
        
        {/* Step 2 with phone, email, password */}
        {step === 2 && (
          <div className="flex flex-col w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
            <div className="text-[26px] text-[#202124]">
              <b>Step 2: Additional Info</b>
            </div>
            <div className="text-[#8E8E8E] text-[18px]">
              Add your additional information here.
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
            </div>

            <button
              type="submit"
              className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
            >
              Continue 2/3 <ArrowIcon />
            </button>
          </div>
        )}
        
        {/* Step 3: Final Info */}
        {step === 3 && (
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
              <div className="text-red-600 text-sm">
                {errors.date.message}
              </div>
            )}

            <input
              {...register("img")}
              type="file"
              className="w-[416px] h-[44px] border p-[12px] rounded-[8px] mt-4"
            />
            {errors.img && (
              <div className="text-red-600 text-sm">
                {errors.img.message}
              </div>
            )}

            <button
              type="submit"
              className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
            >
              Submit <ArrowIcon />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

// "use client";
// import { ArrowIcon } from "@/assets/Arrow-Icon";
// import { use, useState } from "react";

// export default function Home() {
//   const [input, setInput] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [step, setStep] = useState(1);

//   const handleChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     let newError = {
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     };

//     if (!input.firstName) {
//       newError.firstName = "Нэрээ оруулна уу";
//     }
//     if (!input.lastName) {
//       newError.lastName = "Овгоо оруулна уу";
//     }
//     if (!input.username) {
//       newError.username = "Хэрэглэгчийн нэрээ оруулна уу";
//     }
//     if (!input.email) {
//       newError.email = "Зөв мэйл хаяг оруул";
//     } else if (!input.email.includes("@")) {
//       newError.email = "Зөв мэйл хаяг оруул";
//     }
//     if (!input.email.includes(".com")) {
//       newError.email = "Зөв мэйл хаяг оруул";
//     }
//     const count = 0;
//     if (!input.phone) {
//       newError.phone = "Утасны дугаараа оруул";
//     } else if (input.phone > 0 && input.phone / 10) {
//       if ( ) {
//         setCount((prevCount) => prevCount + 1);
//       }
//       newError.phone = "8 оронтой тоо оруул";
//     }

//     if (!input.password) {
//       newError.password = "Нууц үгээ оруул";
//     }
//     if (input.password !== input.confirmPassword) {
//       newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна";
//     }

//     if (
//       newError.firstName ||
//       newError.lastName ||
//       newError.username ||
//       newError.email ||
//       newError.phone ||
//       newError.password ||
//       newError.confirmPassword
//     ) {
//       setError(newError);
//     } else {
//       setError({
//         firstName: "",
//         lastName: "",
//         username: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
//       {step === 1 && (
//         <div className="flex flex-col w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
//           <div className="flex flex-col gap-[8px]">
//             <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
//             <div className="text-[26px] text-[#202124]">
//               <b>Join Us! 😎</b>
//             </div>
//             <div className="text-[#8E8E8E] text-[18px]">
//               Please provide all current information accurately.
//             </div>
//           </div>
//           <div className="flex flex-col gap-[12px]">
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 First name <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 name="firstName"
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 onChange={handleChange}
//                 value={input.firstName}
//               />
//               {error.firstName && (
//                 <div className="text-red-600 text-sm">{error.firstName}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Last name <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="text"
//                 name="lastName"
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 value={input.lastName}
//               />
//               {error.lastName && (
//                 <div className="text-red-600 text-sm ">{error.lastName}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Username <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Your Username"
//                 name="username"
//                 onChange={handleChange}
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 value={input.username}
//               />
//               {error.username && (
//                 <div className="text-red-600 text-sm">{error.username}</div>
//               )}
//             </div>
//           </div>
//           <button
//             className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
//             onClick={(handleSave(), setStep(2))}
//           >
//             Continue 1/3 <ArrowIcon />
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="flex flex-col w-[480px] h-[655px] rounded-[8px] justify-between p-[32px] bg-[white]">
//           <div className="flex flex-col gap-[8px]">
//             <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
//             <div className="text-[26px] text-[#202124]">
//               <b>Join Us! 😎</b>
//             </div>
//             <div className="text-[#8E8E8E] text-[18px]">
//               Please provide all current information accurately.
//             </div>
//           </div>
//           <div className="flex flex-col gap-[12px]">
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Email <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 onChange={handleChange}
//                 value={input.email}
//               />
//               {error.email && (
//                 <div className="text-red-600 text-sm">{error.email}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Phone Number <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="text"
//                 name="phone"
//                 onChange={handleChange}
//                 placeholder="Your Phone Number"
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 value={input.phone}
//               />
//               {error.phone && (
//                 <div className="text-red-600 text-sm">{error.phone}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Password <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Your Password"
//                 onChange={handleChange}
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 value={input.password}
//               />
//               {error.password && (
//                 <div className="text-red-600 text-sm">{error.password}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//               <div className="flex gap-[4px] font-semibold">
//                 Confirm Password <div className="flex text-[#E14942]">*</div>
//               </div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 onChange={handleChange}
//                 placeholder="Confirm Password"
//                 className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
//                 value={input.confirmPassword}
//               />
//               {error.confirmPassword && (
//                 <div className="text-red-600 text-sm">
//                   {error.confirmPassword}
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex gap-[9px] mt-2">
//             <button
//               className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
//               onClick={handleSave}
//             >
//               Continue 2/3 <ArrowIcon />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }