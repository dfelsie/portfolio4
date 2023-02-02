import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Content from "../Components/Content/Content";
import FooterLinks from "../Components/FooterLinks/FooterLinks";
import Header from "../Components/Header/Header";
import HeaderNavbar from "../Components/HeaderNavbar/HeaderNavbar";
import HeadTag from "../Components/HeadTag/HeadTag";

const Home: NextPage = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <HeadTag />
      <HeaderNavbar />
      <Header />
      <Content />
      <FooterLinks />
    </div>
  );
};

export default Home;
