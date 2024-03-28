"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./FlyingBalloons.css"; // Import CSS for styling

const FlyingBalloons: React.FC = () => {
  const [balloons, setBalloons] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Generate random number of balloons
      const count = 10;
      setBalloons(Array.from({ length: count }, getRandomPosition));
    }
  }, []);

  const getRandomPosition = (): { x: number; y: number } => {
    if (typeof window !== "undefined") {
      return {
        x: Math.random() * window.innerWidth,
        y: -100, // Start balloons from above the screen
      };
    } else {
      // Fallback position if window is undefined
      return { x: 0, y: -100 };
    }
  };

  const styles = useSpring({
    from: { y: -100 },
    to: { y: typeof window !== "undefined" ? window.innerHeight + 100 : 0 }, // Move balloons to below the screen
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
