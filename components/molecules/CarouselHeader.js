import React from "react";
import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";

const CarouselHeader = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <>
      <div className="header">
        {items.map(({ title }, index) => (
          <div
            className={`tab ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Heading size="xxs" isMarginless>
              {index === activeIndex && <Icon size="sm" name="diamond" />}{" "}
              <span style={{ display: "inline-block" }}>{title}</span>
            </Heading>
          </div>
        ))}
      </div>
      <style jsx>{`
        .header {
          display: flex;
          margin: 60px 0;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
        }

        .tab {
          background: var(--golden-yellow);
          width: 195px;
          position: relative;
          text-align: center;
          padding: 10px 0;
          cursor: pointer;
          transition: all 2s ease-in-out;
        }

        .tab:not(.is-active) {
          transition: all 2s ease-in:wa
          ;
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default CarouselHeader;
