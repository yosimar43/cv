import confetti from "https://cdn.skypack.dev/canvas-confetti";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Icon from "../atoms/Icon";
import { useEffect, useRef } from "react";

const Footer = () => {
  let img1 = useRef(null);

  useEffect(() => {
    const loadImage = (entradas, observador) => {
      console.log(entradas, observador);
      entradas.forEach((entries) =>
        entries.isIntersecting ? confetti() : null
      );
    };

    const observador = new IntersectionObserver(loadImage, {
      root: null,
      rootMargin: "20px 0px",
      threshold: 0.7,
    });

    observador.observe(img1.current);
  }, []);

  return (
    <>
      <div className="footer" ref={img1}>
        <Heading>
          <strong>Say Hello!</strong>
        </Heading>
        <Paragraph isInverted>it would be a pleasure to meet you</Paragraph>
        <div className="icon-list">
          <div className="item">
            <Icon name="email" />
            <Heading size="xxs" isInverted isMarginless>
              michaelyosimar43@gmail.com
            </Heading>
          </div>
          <div className="item">
            <Icon name="bubble" />
            <Heading size="xxs" isInverted isMarginless>
              awos.com
            </Heading>
          </div>
          <div className="item">
            <Icon name="cellphone" />
            <Heading size="xxs" isInverted isMarginless>
              +(57) 310 338 1693
            </Heading>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: black;
          /* background-position: center calc(100% + 100px); */
        }

        .icon-list {
          display: flex;
          flex-direction: column;
          margin-top: 50px;
          margin-bottom: 30px;
        }

        .item {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }

        .item > :global(div) {
          margin-right: 10px;
        }

        .social-networks {
          display: flex;
          justify-content: space-around;
          margin-bottom: 250px;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
