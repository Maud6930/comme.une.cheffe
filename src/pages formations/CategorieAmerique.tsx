import React from 'react';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import Section from '../section';


const Formation: React.FC<FormationProps> = ({ image, title, description }) => {
  return (
    <div className="formation">
      <img src={image} alt={title} className="formation-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="add-to-cart">Ajouter au panier</button>
    </div>
  );
};

const FormationCategory: React.FC = () => {
  return (
    <section className="formation-category" id="categorie">
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="L'Art du Burger Gourmet : Un Classique Réinventé"
        description="Élevez le simple burger à un niveau d'art culinaire. Apprenez à sélectionner les meilleurs ingrédients, une ode au rêve américain, pour créer un burger gourmet qui ravira les palais les plus exigeants."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Chili Con Carne : Épices du Texas et Passion"
        description="Découvrez les secrets d'un chili con carne authentique, une symphonie de saveurs épicées directement importée du Texas. Un voyage gustatif au cœur de l'Amérique."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Fajitas : Saveurs et Couleurs"
        description="Maîtrisez l'art des fajitas, un mélange de saveurs et de couleurs qui évoque la diversité et la chaleur du Mexique. Un plat convivial qui combine fraîcheur et tendresse."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Guacamole : Au-Delà de l'Avocat"
        description="Plongez dans l'univers du guacamole, une recette qui capte l'essence du Mexique avec ses avocats onctueux et ses épices vibrantes. Un véritable symbole de partage."
      />
      <Formation
        image="chemin-vers-image-formation-asie.jpg"
        title="Empanadas : L'Argentine à la Croisée des Saveurs"
        description="Découvrez la technique pour préparer des empanadas parfaites, ces petits chaussons farcis qui vous feront voyager à travers les saveurs de l'Amérique Latine."
      />
    </section>
  );
};

export default FormationCategory;
