"use client";
import { ArrowIcon } from "@/assets/Arrow-Icon";
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [saveData, setSaveData] = useState(null);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    setSaveData(input);
  };
  const handlePage = () => {
    handleSave();
    setCount((prevCount = prevCount + 1));
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
      <div></div>
    </div>
  );
}
