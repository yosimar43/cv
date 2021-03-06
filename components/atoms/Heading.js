import PropTypes from "prop-types";
import classNames from "classnames";

const Heading = ({
  children,
  size,
  color,
  isCentered,
  isMarginless,
  isComfortable,
  isInverted,
  style,
}) => {
  return (
    <>
      <h1
        className={classNames("heading", `size-${size} color-${color}`, {
          "is-centered": isCentered,
          "is-marginless": isMarginless,
          "is-comfortable": isComfortable,
          "is-inverted": isInverted,
        })}
      >
        {children}
      </h1>
      <style jsx>{`
        .heading {
          font-family: "Hind", sans-serif;
          font-weight: bold;
          line-height: 1;
          margin: 5px 0;
        }

        .heading > :global(*) {
          vertical-align: middle;
        }

        .heading :global(strong) {
          color: var(--golden-yellow);
        }

        .color-primary {
          color: var(--black);
        }

        .color-secondary {
          color: var(--scooter);
        }

        .is-inverted {
          color: var(--white);
        }

        .size-lg {
          font-size: 4.8rem;
        }

        .size-md {
          font-size: 3.6rem;
        }

        .size-sm {
          font-size: 2.4rem;
        }

        .size-xs {
          font-size: 1.8rem;
        }

        .size-xxs {
          font-size: 1.6rem;
        }

        .is-centered {
          text-align: center;
        }

        .is-marginless {
          margin-bottom: 0;
        }

        .is-comfortable {
          margin-left: 10px;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

Heading.proptTypes = {
  size: PropTypes.oneOf(["xxs", "xs", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

Heading.defaultProps = {
  size: "lg",
  color: "primary",
};

export default Heading;
