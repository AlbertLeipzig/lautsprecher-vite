import { createContext, useState } from 'react';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const [venues, setVenues] = useState([]);

  return (
    <DataContext.Provider
      value={{
        events,
        setEvents,
        musicians,
        setMusicians,
        bands,
        setBands,
        organizers,
        setOrganizers,
        venues,
        setVenues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
