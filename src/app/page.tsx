'use client'
import SearchOperation from "@/components/helpers/SearchOperation";
import Heading from "@/components/homepage/homepage-heading";
import MainTable from "@/components/homepage/table-main";
import Navigation from "@/components/homepage/navigation";
import React from "react";
import { CarouselMain } from "@/components/helpers/Carousel";
import Others from "@/components/drawer/FirstPage/Other";
import FirstPage from "@/components/drawer/FirstPage/FilePortion";



export default function Home() {


  return (
    <div className="flex flex-col ">
      <Navigation />
      <Heading />
      <MainTable />

      {/* <CarouselMain /> */}
      {/* <Others /> */}
      {/* <FirstPage /> */}
    </div>
  );
}


