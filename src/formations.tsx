import React from 'react';
import Header from './Header';
import Section from './section';
import Footer from './Footer';

const Formations: React.FC = () => { 
  
  return (
    <div>
      <Header />
      <main className="relative">
        <Section id="platdumonde" title="Formations plats du monde" className="bg-white text-gray-800 rounded-lg shadow-md mt-10">
          <div className="course-description">
            <p className="text-gray-800 text-xl mb-6">
              Vous aimez cuisiner et voyager ? Vous aimez découvrir de nouvelles cultures et de nouvelles saveurs ?
              Vous souhaitez devenir un artisan du monde ? Ces formations sont faites pour vous ! Ici vous voyagerez en Asie, en Europe, en Amérique et en Afrique !
              Choisissez votre continent et découvrez-y nos secrets.
            </p>
            <div>
              <a href="platAsie.html" className="block text-blue-500 hover:text-blue-700"><h4>Catégorie Asie</h4></a>
              <a href="platEurope.html" className="block text-blue-500 hover:text-blue-700"><h4>Catégorie Europe</h4></a>
              <a href="platAmérique.html" className="block text-blue-500 hover:text-blue-700"><h4>Catégorie Amérique</h4></a>
              <a href="lien-vers-catégorie-afrique.html" className="block text-blue-500 hover:text-blue-700"><h4>Catégorie Afrique</h4></a>
            </div>
          </div>
        </Section>

        <Section id="europeenne" title="Cuisine Européenne" className="bg-white text-gray-800 rounded-lg shadow-md mt-10">
          <div className="course-description">
            <img src="chemin-vers-image-africaine.jpg" alt="Cuisine Africaine" className="course-image mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Titre de la formation</h4>
            <p className="text-gray-800 text-xl mb-6">
              Description de la formation en cuisine africaine. Lorem ipsum dolor sit amet.
              Sit perferendis porro qui consequatur sint ab itaque earum aut placeat similique.
              Aut porro sequi cum iure dolores vel porro dolore sed soluta neque. Vel natus deserunt ut autem expedita non perferendis totam non quia ducimus est magni deserunt ab veniam vero.
              Ut similique alias et earum ipsa et debitis recusandae aut harum sunt!
            </p>
          </div>
        </Section>

        <Section id="asiatique" title="Cuisine Asiatique" className="bg-white text-gray-800 rounded-lg shadow-md mt-10">
          <div className="course-description">
            <img src="chemin-vers-image-africaine.jpg" alt="Cuisine Africaine" className="course-image mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Titre de la formation</h4>
            <p className="text-gray-800 text-xl mb-6">
              Description de la formation en cuisine africaine. Lorem ipsum dolor sit amet.
              33 illo esse et consequuntur eius ut galisum voluptates ut quod earum.
              Id quod exercitationem aut inventore impedit est illum officiis aut maiores quibusdam?
              Ut quidem quia non facere iusto aut beatae illum sed quia voluptas hic voluptatem quaerat non quos delectus et molestias Quis.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Formations;
