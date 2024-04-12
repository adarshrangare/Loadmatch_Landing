
import React, { useState } from "react";
import { AutoComplete } from "antd";
const BookTruckFrom = () => {
  const cities = ["Indore", "Mumbai", "Agra", "Delhi"];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col justify-between h-[27rem] ">
      <div className="inputArea space-y-6">
          <div className="formInput">
            <label htmlFor="from" className="block font-semibold pb-1">
              From:
            </label>
            <AutoComplete
              className=" relative after:absolute after:content-[''] after:w-2 after:h-2 after:bg-green-500 after:rounded-full h-12 after:top-5 after:right-8 after:animate-pulse shadow-md rounded-md "
              options={cities.map((city) => ({ label: city, value: city }))}
              style={{
                width: "100%",
              }}
              value={from}
              onSelect={(value) => {
                setFrom(value);
              }}
              placeholder="Enter your loading City"
              variant="filled"
              allowClear
              onClear={() => {
                setFrom("");
              }}
              onSearch={(e) => {
                setFrom(e);
              }}
              filterOption={true}
            />
          </div>
          <div className="toInput">
            <label htmlFor="to" className="block font-semibold pb-1">
              To:
            </label>
            <AutoComplete
              className="relative after:absolute after:content-[''] after:w-2 after:h-2 after:bg-red-500 after:rounded-full h-12 after:top-5 after:right-8 after:animate-pulse shadow-md rounded-md  "
              options={cities.map((city) => ({ label: city, value: city }))}
              style={{
                width: "100%",
              }}
              value={to}
              onSelect={(value) => {
                setTo(value);
              }}
              placeholder="Enter your loading City"
              variant="filled"
              allowClear
              onClear={() => {
                setTo("");
              }}
              onSearch={(e) => {
                setTo(e);
              }}
              filterOption={true}
            />
          </div>
      </div>
    
      <div className="actionArea text-center">
            
            <p className="my-2 text-blue-600 text-sm cursor-pointer">Already have an account?</p>
              <button type="submit" className="mx-auto w-11/12 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all mt-4 mb-2">Book</button>
      </div>

    </form>
  );
};

export default BookTruckFrom;
