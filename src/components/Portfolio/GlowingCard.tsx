import React, { useState, HTMLAttributes } from "react";
import { Card } from "../ui/card";

interface GlowingCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // Ensure children prop is included
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <Card
      className="bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />
    </Card>
  );
};

export default GlowingCard;
