import React from 'react';

interface SectionProps extends React.ComponentProps<'section'> {
  title: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className, ...props }) => {
  return (
    <section id={id} className={`p-6 my-10 ${className}`} {...props}>
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
