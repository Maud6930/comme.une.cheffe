import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <form id="fs-frm" name="complaint-form" acceptCharset="utf-8" action="https://formspree.io/f/mjvnrllz" method="post">
          <fieldset id="fs-frm-inputs" className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-black">Nom et prénoms</label>
              <input
                type="text"
                id="full-name"
                name="name"
                placeholder="Maryam Kim"
                required
                className="w-full border border-gray-300 p-2 rounded text-black"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-black">Email</label>
              <input
                type="email"
                id="email-address"
                name="_replyto"
                placeholder="email@domain.com"
                required
                className="w-full border border-gray-300 p-2 rounded text-black"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-black">Numéro de téléphone (facultatif)</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="(+212) 555-5555"
                className="w-full border border-gray-300 p-2 rounded text-black"
              />
            </div>
            <div>
              <label htmlFor="complaint" className="block text-black">Votre message</label>
              <textarea
                rows={6}
                id="complaint"
                name="complaint"
                placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                required
                className="w-full border border-gray-300 p-2 rounded text-black"
              />
            </div>
            <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission" />
          </fieldset>
          <input
            type="submit"
            value="Envoyer le message"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
