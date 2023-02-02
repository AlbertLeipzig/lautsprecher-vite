import { useState, useEffect } from 'react';

const projects = [
  {
    title : "default",
    description: "Click auf einem Tab, um mehr zu erfahren",
    img: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVnYXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: 'musicBoard',
    description:
      'Wo man Musiker, Bands, Veranstaltungsorte, Musikgeschäfte uvm finden kann, mit Filterfunktionen, Links...',
    img: 'https://images.unsplash.com/photo-1535057866921-a768e391e410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9vZCUyMGJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'article',
    description:
      'Artikeln über das Stadtmusikleben: was bewegt sich derzeit durch die Musikszene vom Underground bis Gewandhaus, sowie über die Stadtmusikgeschichte.',
    img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'interactiveMap',
    description: 'Wo man alle Veranstaltungen und Musikgeschäfte findet',
    img: 'https://images.unsplash.com/photo-1544830826-4ccc3bf5ceb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFueSUyMG1hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'interviews',
    description:
      'Interviews mit Musikern, Bands, Veranstaltern, Musikgeschäften, ... Besonders die nicht so bekannten. Hast du ein Projekt, das du vorstellen möchtest? Wir interessieren uns dafür!',
    img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export const Projects = () => {
  const [content, setContent] = useState({});
  const [filter, setFilter] = useState('default');

  useEffect(() => {
    projects.forEach((project) => {
      project.title === filter && setContent(project);
    });
  }, [filter]);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <menu className="projects__test">
        <li onClick={() => setFilter('musicBoard')}>Musik-Board</li>
        <li onClick={() => setFilter('article')}>Artikeln</li>
        <li onClick={() => setFilter('interactiveMap')}>Interaktive Karte</li>
        <li onClick={() => setFilter('interviews')}>Interviews</li>
      </menu>
      <div className="projects__content">
        {content.description && <p>{content.description}</p>}
        {content.img && <img src={content.img} alt={content.title} />}
      </div>
    </div>
  );
};
