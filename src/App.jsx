import React from 'react';
import Layout from './layouts/Layout';
import Reel from './sections/Reel';
import Services from './sections/Services';
import ServicesPre from './sections/ServicesPre';
import ServicesPro from './sections/ServicesPro';
import ServicesPost from './sections/ServicesPost';
import OriginalProject from './sections/OriginalProject';
import OriginalProjectPart2 from './sections/OriginalProjectPart2';
import OriginalProjectPart3 from './sections/OriginalProjectPart3';
import Team from './sections/Team';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Reel />
      <Services />
      <ServicesPre />
      <ServicesPro />
      <ServicesPost />
      <OriginalProject />
      <OriginalProjectPart2 />
      <OriginalProjectPart3 />
      <AboutUs />
      <Team />
      <Contact />
    </Layout>
  );
}

export default App;
