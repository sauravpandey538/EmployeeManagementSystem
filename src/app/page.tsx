'use client';

import { Provider } from "react-redux";
import { store } from "../lib/store"
import Heading from "@/components/table/homepage-heading";
import MainTable from "@/components/table/table-main";
import React from "react";
import SideNavigation from "@/components/SideNavBar/page";
import ActionBTN from "@/components/landingPage/page";


export default function Home() {
  const hello = "conflict";
  return (
    <div className="flex flex-col justify-center items-center h-screen ">

      {/* <SideNavigation />s
      <Heading />
      <MainTable /> */}

      <ActionBTN />

    </div>
  );
}


