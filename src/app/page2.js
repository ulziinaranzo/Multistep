"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };


  const handleSave = () => {
    const newError = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    if (!input.firstName) {
      newError.firstName = "First Name is required";
    }
    if (!input.lastName) {
      newError.lastName = "Last Name is required";
    }
    if (!input.email) {
      newError.email = "Email is required";
    }
    if (!input.phone) {
      newError.phone = "Phone number is required";
    }

    setError(newError);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <div className="flex flex-col w-[480px] h-[655px] rounded-[8px] justify-between p-[32px] bg-[white]">
        <div className="flex flex-col gap-[8px]">
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
              First Name <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Your First Name"
              name="firstName"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
              value={input.firstName}
            />
            {error.firstName && (
              <div className="text-red-600 text-sm mt-2">{error.firstName}</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Last Name <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Your Last Name"
              name="lastName"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
              value={input.lastName}
            />
            {error.lastName && (
              <div className="text-red-600 text-sm mt-2">{error.lastName}</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Email <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
              value={input.email}
            />
            {error.email && (
              <div className="text-red-600 text-sm mt-2">{error.email}</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Phone Number <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Your Phone Number"
              name="phone"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
              value={input.phone}
            />
            {error.phone && (
              <div className="text-red-600 text-sm mt-2">{error.phone}</div>
            )}
          </div>
        </div>
        <button
          className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
          onClick={handleSave} 
        >
          Submit
        </button>
      </div>
    </div>
  );
}
