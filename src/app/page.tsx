'use client'
import SearchOperation from "@/components/helpers/SearchOperation";
import Heading from "@/components/homepage/homepage-heading";
import Navigation from "@/components/homepage/navigation";
import React from "react";



export default function Home() {


  return (
    <div className="flex ">
      <Navigation />
      <div className="flex flex-grid gap-5 flex-1">
        <Heading />
      </div>
    </div>
  );
}


