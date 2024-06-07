import React from 'react';

interface FormationProps {
  image: string;
  title: string;
  description: string;
}

const Formation: React.FC<FormationProps> = ({ image, title, description }) => {
  return (
    <div className="formation mb-8">
      <img src={image} alt={title} className="formation-image w-full h-auto mb-4" />
      <h3 className="text-xl mb-2 text-black">{title}</h3> 
      <p className="mb-2 text-black">{description}</p>
      {/* {price && <span className="price text-lg font-semibold text-black mb-2 block">{price}</span>} */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Ajouter au panier</button>
    </div>
  );
};

export default Formation;
