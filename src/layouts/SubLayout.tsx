// "use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import React from "react";

const SubLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
};

export default SubLayout;
