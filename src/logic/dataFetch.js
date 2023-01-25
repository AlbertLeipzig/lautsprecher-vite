import axios from 'axios';
export const dataFetch = async () => {
  try {
    const res = await axios('http://localhost:5000/api/v1/events');
    const data = await res.data;
    return { data };
  } catch (e) {
    console.error(e);
  }
};
