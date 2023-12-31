import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            {
              // eslint-disable-next-line jsx-a11y/heading-has-content
              <h3 className={className} ref={countUpRef} />
            }
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default Countup;
