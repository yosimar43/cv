import Head from "next/head";

import Hero from "../components/organisms/Hero";
import Profile from "../components/organisms/Profile";
import Career from "../components/organisms/Career";
import Footer from "../components/organisms/Footer";

const index = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'am front-end developer , Expert in web technologies, know me here!!!.
            create the future in the web.
"
        />
        <meta property="og:image" content="/images/page.jpeg" />
        <meta name="keywords" content="HTML, CSS, JavaScript, CV,yosimar43," />
        <meta name="author" content="Michael Sinisterra" />
        <title>Welcome | cv</title>
      </Head>
      <Hero />
      <Profile />
      <Career />
      <Footer />
    </>
  );
};

export default index;
