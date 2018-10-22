import { API_URL } from '../constants/constants';

export const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  }
  catch (error) {
    return console.error(error);
  }
}