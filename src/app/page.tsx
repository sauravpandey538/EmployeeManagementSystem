'use client';

import { Provider } from "react-redux";
import { store } from "../lib/store"
import Heading from "@/components/homepage/homepage-heading";
import MainTable from "@/components/homepage/table-main";
import Navigation from "@/components/homepage/navigation";
import React from "react";


export default function Home() {


  return (
    <div className="flex flex-col ">


      <Navigation />
      <Heading />
      <MainTable />



    </div>
  );
}


