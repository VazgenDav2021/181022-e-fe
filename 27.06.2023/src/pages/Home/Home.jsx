import React from "react";
import { HomeWrapper } from "./styled";
import Category from "../../components/Category/Category";
import Catalogue from "../../components/Category/Catalogue/Catalogue";

const Home = () => {
  return (
    <>
      <HomeWrapper />
      <Category />
      <Catalogue />
    </>
  );
};

export default Home;
