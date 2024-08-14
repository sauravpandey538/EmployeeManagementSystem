'use client';

import { Provider } from "react-redux";
import { store } from "../lib/store"
import Heading from "@/components/homepage/homepage-heading";
import MainTable from "@/components/homepage/table-main";
import React from "react";
import SideNavigation from "@/components/SideNavBar/page";


export default function Home() {


  return (
    <div className="flex flex-col ">

      <SideNavigation />
      <Heading />
      <MainTable />



    </div>
  );
}


