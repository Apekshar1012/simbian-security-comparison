import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  try {
    // Dynamically import SVG as a React component
   // const IconComponent = React.lazy(() => import(`../../assets/icons/${name}.svg`));
    return (
      <React.Suspense fallback={<div>Loading Icon...</div>}>
      </React.Suspense>
    );
  } catch (error) {
    console.error(`Icon not found: ${name}`);
    return null;
  }
};

export default Icon;
