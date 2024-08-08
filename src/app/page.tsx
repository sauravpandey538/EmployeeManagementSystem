'use client';

import { Provider } from "react-redux";
import { store } from "../lib/store"
import SearchOperation from "@/components/helpers/SearchOperation";
import Heading from "@/components/homepage/homepage-heading";
import MainTable from "@/components/homepage/table-main";
import Navigation from "@/components/homepage/navigation";
import React from "react";
import { CarouselMain } from "@/components/helpers/Carousel";
import Others from "@/components/drawer/FirstPage/Other";
import FirstPage from "@/components/drawer/FirstPage/FilePortion";
import MultiSelector from "@/components/helpers/MultiSelector";
import DataInfo from "@/components/drawer/SecondPage/DataInfo";

export default function Home() {


  return (
    <div className="flex flex-col ">
      <Provider store={store}>

        <Navigation />
        <Heading />
        <MainTable />

        {/* <CarouselMain /> */}
        {/* <Others /> */}
        {/* <FirstPage /> */}
        {/* <MultiSelector /> */}
        {/* <DataInfo /> */}
      </Provider>

    </div>
  );
}


