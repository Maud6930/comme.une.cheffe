import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './section';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <Section id="about" title="À propos de nous" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">À propos de nous</h2>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-black mb-4">
                Bienvenue chez "Comme une cheffe", votre référence en matière de cuisine gastronomique.
                Fondée en 2024 par la famille Qayla, notre mission est de partager notre passion pour la cuisine
                avec le monde. De recettes traditionnelles à des créations innovantes, nous souhaitons inspirer
                chaque individu à explorer les merveilles culinaires.
              </p>
              <p className="text-black">
                Notre équipe est composée de chefs reconnus et de passionnés de cuisine qui travaillent
                ensemble pour vous offrir une expérience unique. Suivez-nous pour découvrir des astuces de cuisine,
                des recettes délicieuses, et bien plus encore.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
