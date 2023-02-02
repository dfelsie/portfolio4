import type { NextPage } from "next";
import Content from "../components/Content/Content";
import FooterLinks from "../components/FooterLinks/FooterLinks";
import Header from "../components/Header/Header";
import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import HeadTag from "../components/HeadTag/HeadTag";

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
