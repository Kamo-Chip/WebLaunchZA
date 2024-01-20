import Testimonials from "../sections/Testimonials";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WebLaunchZA - Digital Agency for SMEs in South Africa</title>
        <meta
          name="description"
          content="WebLaunchZA helps small to medium sized South African businesses establish their online presence. We design and develop your website as well as setup and manage your Google Business profile."
          key="desc"
        />
        <meta
          name="keywords"
          content="small business web design company, website design companies for small businesses, best website design companies for small business, local business website design, affordable web design, web design agency, manage google business account, how to advertise your business for free, how to advertise on google for free, best digital marketing agency websites"
        />
        <meta
          property="og:description"
          content="We establish your business online with ease. At an affordable price"
        />
        <meta
          property="og:image"
          content="https://www.weblaunchza.com/hero.png"
        />
        <meta name="author" content="WebLaunchZA" />
      </Head>
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Contact />
    </Layout>
  );
}
