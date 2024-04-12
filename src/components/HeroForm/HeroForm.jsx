import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BookTruckFrom from "./BookTruckFrom";
import FindLoadForm from "./FindLoadForm";

const HeroForm = () => {
  const [value, setValue] = useState("bookTruck");

  return (
    <div className="formSection lg:-translate-y-16 shadow-lg rounded-lg lg:basis-1/2">
      <div className="formContainer max-w-md max-sm:max-w-sm max-sm:w-[24rem] w-[28rem] bg-white rounded-lg ">
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList
              onChange={(e, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab sx={{width:"50%"}} label={<h1 className="font-semibold">Book Truck</h1> } value={"bookTruck"} />
              <Tab sx={{width:"50%"}} label={<h1 className="font-semibold">Find Loads</h1>} value={"findLoad"} />
            </TabList>
          </Box>
          
          <TabPanel value="bookTruck"> <BookTruckFrom/> </TabPanel>
          <TabPanel value="findLoad"> <FindLoadForm/> </TabPanel>

        </TabContext>
      </div>
    </div>
  );
};

export default HeroForm;
