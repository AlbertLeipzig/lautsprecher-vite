else if (filter.date !== '' && filter.tag === '') {
      setFilteredEvents(eventFilter(events, filter.date, 'date'));
      /* testConsole(filter, 'date filter'); */
      console.log('date is defined');
      // tag is defined
    } else if (filter.date === '' && filter.tag !== '') {
      setFilteredEvents(eventFilter(events, filter.tag, 'tag'));
      testConsole(filter, 'tag filter');
      // both are defined
    } else if (filter.date !== '' && filter.tag !== '') {
      setFilteredEvents(
        eventFilter(eventFilter(events, filter.date, 'date'), filter.tag, 'tag')
      );
      testConsole(filter, 'date and tag filter');
      // else set all events
    }