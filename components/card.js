import React, { useState } from 'react';

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  animate
} from 'framer-motion';

const Card = ({ url, shouldHover, cardId, ...props }) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const [selectedId, setSelectedId] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const controls = useAnimation();

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      layout
      layoutId={'card' + cardId}
      style={{
        width: 250,
        height: 250,
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        borderRadius: 30,
        margin: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        perspective: 400,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        animate(x, 200, {
          duration: 2
        });
        animate(y, 200, {
          duration: 2
        });
      }}
      animate={controls}
    >
      <motion.div
        style={{
          width: 250,
          height: 250,
          borderRadius: 30,
          backgroundColor: 'red',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          rotateX: rotateX,
          rotateY: rotateY
        }}
      />
    </motion.div>
  );
};

export default Card;
