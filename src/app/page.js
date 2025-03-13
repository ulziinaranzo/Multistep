"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1); 

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    let newError = { firstName: "", lastName: "", username: "", email: "", phone: "", password: "", confirmPassword: "" };

    if (!input.firstName) {
      newError.firstName = "First Name is required";
    }
    if (!input.lastName) {
      newError.lastName = "Last Name is required";
    }
    if (!input.username) {
      newError.username = "Username is required";
    }


    if (!input.email) {
      newError.email = "Email is required";
    } else if (!input.email.includes('@') || !input.email.includes('.com')) {
      newError.email = "Please enter a valid email address";
    }

    if (!input.phone) {
      newError.phone = "Phone number is required";
    } else if (!/^\d{8}$/.test(input.phone)) {
      newError.phone = "Please enter a valid 8-digit phone number";
    }

    if (!input.password) {
      newError.password = "Password is required";
    }
    if (input.password !== input.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
    }

    if (
      newError.firstName ||
      newError.lastName ||
      newError.username ||
      newError.email ||
      newError.phone ||
      newError.password ||
      newError.confirmPassword
    ) {
      setError(newError);
    } else {
      setError({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setStep((prevStep) => prevStep + 1); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      {step === 1 && (
        <div className="flex flex-col w-[480px] h-[655px] rounded-[8px] justify-between p-[32px] bg-[white]">
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
                type="text"
                placeholder="Your Name"
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
                Last name <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Your Name"
                className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
                value={input.lastName}
              />
              {error.lastName && (
                <div className="text-red-600 text-sm mt-2">{error.lastName}</div>
              )}
            </div>
            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Username <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                type="text"
                placeholder="Your Username"
                name="username"
                onChange={handleChange}
                className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
                value={input.username}
              />
              {error.username && (
                <div className="text-red-600 text-sm mt-2">{error.username}</div>
              )}
            </div>
          </div>
          <button
            className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
            onClick={handleSave}
          >
            Continue 1/3 <ArrowIcon />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col w-[480px] h-[655px] rounded-[8px] justify-between p-[32px] bg-[white]">
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
                Email <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
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
                name="phone"
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
                value={input.phone}
              />
              {error.phone && (
                <div className="text-red-600 text-sm mt-2">{error.phone}</div>
              )}
            </div>
            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Password <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
                className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
                value={input.password}
              />
              {error.password && (
                <div className="text-red-600 text-sm mt-2">{error.password}</div>
              )}
            </div>
            <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
              <div className="flex gap-[4px] font-semibold">
                Confirm Password <div className="flex text-[#E14942]">*</div>
              </div>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
                value={input.confirmPassword}
              />
              {error.confirmPassword && (
                <div className="text-red-600 text-sm mt-2">{error.confirmPassword}</div>
              )}
            </div>
          </div>
          <div className="flex gap-[9px]">
            <button
              className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
              onClick={handleSave}
            >
              Continue 2/3 <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
