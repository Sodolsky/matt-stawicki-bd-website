"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./FlyingBalloons.css"; // Import CSS for styling

const FlyingBalloons: React.FC = () => {
  const [balloons, setBalloons] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate random number of balloons
    const count = 10;
    setBalloons(Array.from({ length: count }, getRandomPosition));
  }, []);

  const getRandomPosition = (): { x: number; y: number } => {
    return {
      x: Math.random() * window.innerWidth,
      y: -100, // Start balloons from above the screen
    };
  };

  const styles = useSpring({
    from: { y: -100 },
    to: { y: window.innerHeight + 100 }, // Move balloons to below the screen
    config: { duration: 3000 }, // Animation duration
    onRest: () => {
      // Reset position when animation ends
      setBalloons(balloons.map(getRandomPosition));
    },
  });

  return (
    <div className="flying-balloons">
      {balloons.map((position, index) => (
        <animated.div
          key={index}
          className="balloon"
          style={{
            ...styles,
            left: position.x,
            top: position.y,
          }}
        />
      ))}
    </div>
  );
};

export default FlyingBalloons;
