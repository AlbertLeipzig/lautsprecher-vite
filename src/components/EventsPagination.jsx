import { useState, useEffect } from 'react';

export const EventsPagination = (filteredEvents) => {
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    const paginationValue = Math.floor(filteredEvents.props.length / 25) + 1;

    if (paginationValue === 1) {
      setIndexes([1]);
    } else if (paginationValue === 2) {
      setIndexes([1, 2]);
    } else if (paginationValue === 3) {
      setIndexes([1, 2, 3]);
    } else {
      setIndexes([1, 2, 3, '...', paginationValue]);
    }
  }, [filteredEvents]);

  return (
    <>
      {indexes &&
        indexes.forEach((index) => {
          <ul style={{ display: 'flex' }}>
            <>
              <li>{index}</li>
            </>
            ;
          </ul>;
        })}
    </>
  );
};
