"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [saveData, setSaveData] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    setSaveData(input);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
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
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Last name <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Your Name"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Username <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Your Username"
              onChange={handleChange}
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
            />
          </div>
        </div>
        <button
          className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
          onClick={() => {
            handleSave;
          }}
        >
          Continue 1/3 <ArrowIcon />
        </button>
      </div>

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
              type="text"
              placeholder="Your Email"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Phone Number <div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Password<div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Your Password"
              onChange={handleChange}
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
            <div className="flex gap-[4px] font-semibold">
              Confirm Password<div className="flex text-[#E14942]">*</div>
            </div>
            <input
              type="text"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-[416px] h-[44px] border border-[#8B8E95] p-[12px] rounded-[8px]"
            />
          </div>
        </div>
        <div className="flex gap-[9px]">
          <button
            className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px]"
            onClick={() => {
              handleSave;
            }}
          ></button>
          <button
            className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[280px]"
            onClick={() => {
              handlePage;
            }}
          >
            Continue 2/3 <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
