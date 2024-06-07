import React from 'react';
import Formation from './CategorieFormation';

const FormationSection: React.FC = () => {
  return (
    <section id="Formation Asie" className="py-12">
      <h2 className="text-3xl text-black font-bold mb-8">Formation aux plats asiatiques</h2>
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Maîtrise des Sushis"
        description="Apprenez l'art des sushis avec notre cheffe. De la sélection du poisson à la préparation du riz, devenez un maître sushi."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Pad Thaï Perfectionné"
        description="Domptez les saveurs complexes du Pad Thaï, le joyau de la cuisine thaïlandaise."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Tempura de Crevettes, Art et Technique"
        description="Perfectionnez l'art délicat du tempura pour des crevettes irrésistiblement croustillantes."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Secrets des Nems Croustillants"
        description="Conquérir l'art des nems, entre tradition et croustillant parfait."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Rouleaux de Printemps, Maîtrise et Tradition"
        description="Maîtrisez l'équilibre des saveurs et la fraîcheur dans chaque rouleau."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Butter Chicken: L'Essence de l'Inde"
        description="Plongez au cœur des épices indiennes pour un Butter Chicken inoubliable."
      />
    </section>
  );
};

export default FormationSection;
