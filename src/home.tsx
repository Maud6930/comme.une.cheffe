import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './section';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <Section id="convives" title="Formule : pour épater tes convives!" className="bg-white text-gray-800 rounded-lg shadow-md p-6">
          <div className="course-description">
            <p className="text-gray-800 text-xl mb-6">
              Vous aimez recevoir et souhaitez impressionner vos invités avec des plats savoureux et élaborés ?
              Notre formule "Épate tes convives" est faite pour vous ! 
              Destinée aux passionnés de cuisine souhaitant se perfectionner dans un cadre privé,
              cette formation vous permettra d'acquérir les bases de la cuisine et de réaliser des recettes 
              qui raviront les papilles de vos proches.
              <br /><br />
              Tarifs :
              <ul className="list-disc list-inside text-gray-800 text-xl mb-6">
                <li>Groupe de 5 à 10 personnes : 9,99€ (99 DH) par personne</li>
                <li>Groupe de 2 à 4 personnes : 24,99€ (249 DH) par personne</li>
                <li>Cours particulier : 49,99€ (499 DH)</li>
              </ul>
            </p>
          </div>
        </Section>

        <Section id="Cheffe" title="Formule : I became a cheffe." className="bg-white text-gray-800 rounded-lg shadow-md p-6 mt-10">
          <div className="course-description">
            <p className="text-gray-800 text-xl mb-6">
              Vous rêvez de faire de votre passion pour la cuisine votre métier ? 
              Notre formule "I became a cheffe" vous accompagne dans votre projet professionnel. 
              Que vous souhaitiez travailler au service de particuliers, proposer vos services de traiteur ou encore lancer votre propre activité de chef à domicile,
              cette formation vous donnera toutes les clés pour réussir.
              <br /><br />
              Tarifs :
              <ul className="list-disc list-inside text-gray-800 text-xl mb-6">
                <li>Groupe de 5 à 10 personnes : 39,99€ (399 DH) par personne</li>
                <li>Groupe de 2 à 4 personnes : 99,99€ (999 DH) par personne</li>
                <li>Cours particulier : 199,99€ (1999 DH)</li>
              </ul>
            </p>
          </div>
        </Section>

        <Section id="entrepreneur" title="Formule : pour ouvrir ton commerce." className="bg-white text-gray-800 rounded-lg shadow-md p-6 mt-10">
          <div className="course-description">
            <p className="text-gray-800 text-xl mb-6">
              Vous êtes un entrepreneur dans l'âme et souhaitez ouvrir votre propre restaurant ou commerce de bouche ? 
              Notre formule "Pour ouvrir ton commerce" est conçue pour vous aider à concrétiser votre projet. 
              Grâce à cette formation complète, vous développerez vos compétences en cuisine et en gestion d'entreprise,
              pour devenir un chef d'entreprise accompli et reconnu. En choisissant cette formule, nous nous engageons à faire votre publicité 
              sur notre site et sur nos réseaux sociaux, de manière permanente.
              <br /><br />
              Tarifs :
              <ul className="list-disc list-inside text-gray-800 text-xl mb-6">
                <li>Formation solo ou en duo : 99,99€ (999 DH) par personne</li>
              </ul>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
