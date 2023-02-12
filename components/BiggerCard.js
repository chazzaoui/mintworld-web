import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  animate
} from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function BiggerCard({ id, url, onClick }) {
  const popdown = () => onClick(undefined);
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const controls = useAnimation();

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const spin = {
    rotate: 360,
    transition: {
      duration: 0.5,
      loop: Infinity,
      ease: 'easeInOut'
    }
  };

  useEffect(() => {
    controls.start(spin);
  }, []);

  return (
    <motion.div
      style={{
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        width: '100vw',
        height: '100vh',
        position: 'fixed'
      }}
    >
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#535353'
        }}
        onClick={popdown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, filter: 'blur(30px)' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          animate(x, 200);
          animate(y, 200);
        }}
        style={{
          zIndex: 1,
          position: 'absolute',
          willChange: 'opacity',
          top: '0',
          left: '0',
          marginTop: -160,
          marginLeft: -125,
          width: 250,
          height: 400,
          borderRadius: 30,
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          rotateX: rotateX,
          rotateY: rotateY
        }}
        animate={controls}
        layoutId={'card' + id}
        transition={1.5}
      />
    </motion.div>
  );
}
