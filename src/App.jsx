/* eslint-disable no-unused-vars */
import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import SelectedDrops from "./components/SelectedDrops";
import TopCollections from "./components/TopCollection";
import TrendingNfts from "./components/TrendingNfts";
import ResourcesSection from "./components/ResourcesSection";
import PopularSection from "./components/PopulartSection";
import CreateSection from "./components/CreateSection";
import BrandsNames from "./components/BrandsName";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  //console.log(import.meta.env.VITE_OPENSEA_API);
  //console.log(import.meta.env.VITE_MORALIS_API);

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainSection />
      <SelectedDrops />
      <TopCollections />
      <TrendingNfts />
      <ResourcesSection />
      <PopularSection />
      <CreateSection />
      <BrandsNames />
      <Footer />
    </>
  );
}

export default App;