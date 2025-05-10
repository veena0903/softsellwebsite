import React from "react";
import Layout from "../../component/Layouts/Layout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

import "../../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      {/* Home page - Hero Section */}
      <Section1 />

      {/* How it works Section */}
      <Section2 />

      {/* Why Choose Us Section */}
      <Section3 />

      {/* Testimoinal Section */}
      <Section4 />

      {/* Contact Form Section */}
      <Section5 />
    </Layout>
  );
};

export default Home;
