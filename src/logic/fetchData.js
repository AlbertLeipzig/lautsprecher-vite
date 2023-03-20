import axios from 'axios';

const serverUri =
  'http://localhost:5000/api/v1' || 'https://tame-blue-cuff.cyclic.app/api/v1/';

const eventServer = `${serverUri}/events`;
const venuesServer = `${serverUri}/venues`;

const fetchData = () => {
  /* const bandsServer = `${serverUri}/bands` */
  /* const organizersServer = `${serverUri}/organizers` */
  /* const musiciansServer = `${serverUri}/musicians` */
};

const getEvents = async () => {
  try {
    const res = await axios.get(eventServer);
    const data = res.data;
    return data
  } catch (e) {
    console.error(e);
  }
};

const getVenues = async () => {
  try {
    const res = await axios.get(venuesServer);
    const data = res.data;
    return data
  } catch (e) {
    console.error(e);
  }
};

export { getEvents, getVenues };