import React from "react";
import Header from "../../components/Header/Header";
import HomeFeature from "../../components/HomeComponent/HomeFeatures/HomeFeature";
import HomeStory from "../../components/HomeComponent/HomeStory/HomeStory";
import "./Home.css";
import Quote from "../../components/HomeComponent/Quote/Quote";
import HomeMeals from "../../components/HomeComponent/HomeMeals/HomeMeals";
import Footer from "../../components/Footer/Footer";
import ChatBox from "../../components/ChatBox/ChatBox";

function Home() {
  return (
    <>
      <Header />
      <HomeFeature />;
      <HomeStory />
      <Quote />
      <HomeMeals />
      <Footer />
      <ChatBox />
    </>
  );
}

export default Home;
