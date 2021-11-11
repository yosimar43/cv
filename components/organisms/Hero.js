import React, { useEffect } from "react";
import Container from "../layout/Container";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome ",
        "In this<strong> site</strong> you can <strong>know</strong> about me",
        "I'm <strong>Michael</strong>",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    let animation = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      animation.destroy();
    };
  }, []);

  return (
    <header className="container">
      <Container>
        <div className="hero">
          <Heading size="sm">Hello,</Heading>
          <Heading>
            <span id="typpes" ref={el}></span>
          </Heading>

          <Paragraph size="md">
            Front-end developer,Expert in web technologies,my dreams are create
            the future in the web.
          </Paragraph>
        </div>
      </Container>
      <style jsx>{`
        .container {
          min-height: max-content;
          padding: 1rem auto;
        }

        .hero {
          display: flex;
          flex-direction: column;
          padding: 21px 27px 0;
          position: relative;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 23px;
        }

        .photo {
          position: relative;
          bottom: 0;
          right: 0;
          width: 100%;
          max-width: 800px;
        }

        @media (min-width: 1140px) {
          .hero {
            align-items: flex-start;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
