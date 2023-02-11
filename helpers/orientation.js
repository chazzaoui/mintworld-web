import React, { useState, useEffect } from 'react';

const getRawOrientation = function (e) {
  if (!e) {
    return { alpha: 0, beta: 0, gamma: 0 };
  } else {
    return { alpha: e.alpha, beta: e.beta, gamma: e.gamma };
  }
};

const getOrientationObject = e => {
  const orientation = getRawOrientation(e);
  return {
    absolute: orientation,
    relative: {
      alpha: orientation.alpha - baseOrientation.alpha,
      beta: orientation.beta - baseOrientation.beta,
      gamma: orientation.gamma - baseOrientation.gamma
    }
  };
};

const Orientation = () => {
  const [firstReading, setFirstReading] = useState(true);
  const [baseOrientation, setBaseOrientation] = useState(getRawOrientation());
  const [orientation, setOrientation] = useState(getOrientationObject());

  const resetBaseOrientation = () => {
    setFirstReading(true);
    setBaseOrientation(getRawOrientation());
  };

  useEffect(() => {
    const handleOrientation = function (e) {
      if (firstReading) {
        setFirstReading(false);
        setBaseOrientation(getRawOrientation(e));
      }

      const o = getOrientationObject(e);
      setOrientation(o);
    };

    window.addEventListener('deviceorientation', handleOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, [firstReading, baseOrientation]);

  return orientation;
};

export default Orientation;
