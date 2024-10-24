import React from "react";

interface BulletListProps {
  items: string[];
  className?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, className = "" }) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center group">
          <span className="flex-shrink-0 w-2 h-2  rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors duration-200" />
          <div className="ml-4">
            <p>{item}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
