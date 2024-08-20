'use client';

import { Provider } from "react-redux";
import { store } from "@/lib/store"
import Heading from "@/components/table/homepage-heading";
import MainTable from "@/components/table/table-main";
import React from "react";
import SideNavigation from "@/components/SideNavBar/page";


export default function EmployeeList() {


  return (
    <div className="flex flex-col ">

      <SideNavigation />
      <Heading />
      <MainTable />



    </div>
  );
}


