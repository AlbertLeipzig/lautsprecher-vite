import { useContext } from "react";
import { TitleContext } from "../context/TitleContext.jsx";
export const About = () => {
  const { title, setTitle } = useContext(TitleContext);
  setTitle('About');
  return (
    <div className="about">
      <h1>{title}</h1>
      <h2>Mission</h2>
      <p>
        Lautsprecher will das Leipziger Musiklebens durch Vernetzung von Menschen verbessern.
      </p>
    </div>
  );
};
