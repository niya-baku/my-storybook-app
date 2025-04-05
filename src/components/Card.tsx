import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  variant?: 'default' | 'outlined';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  variant = 'default',
}) => {
  const variantStyles = 
    variant === 'default' 
      ? 'bg-white shadow-md' 
      : 'border border-gray-300 bg-transparent';
  

  return (
    <div className={`rounded-lg overflow-hidden ${variantStyles} max-w-sm`}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={"/image/doctor.jpg"} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;