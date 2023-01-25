/* fetch data from api */

  const dataFetch = async () => {
    try {
      const res = await axios('http://localhost:5000/api/v1/events');
      const data = await res.data;
      setEvents(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  /* filter events */

  const testConsole = (filter, type) => {
    console.log(
      'we have ',
      type,
      'date is ',
      typeof filter.date,
      ' : ',
      filter.date,
      ' and tag is ',
      typeof filter.tag,
      ' : ',
      filter.tag
    );
    console.log(filteredEvents);
  };

  useEffect(() => {
    // no filter is defined
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events);
      // date is defined
    } else if (filter.date !== '' && filter.tag === '') {
      setFilteredEvents(eventFilter(events, filter.date));
      console.log('date is defined');
      // tag is defined
    } else if (filter.date === '' && filter.tag !== '') {
      setFilteredEvents(eventFilter(events, filter.tag));
      // both are defined
    } else {
      setFilteredEvents(events);
    }
  }, [filter, events]);