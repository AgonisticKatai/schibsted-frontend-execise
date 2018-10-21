export { URL } from '../constants/constants';

export const getData = async () => {
  try {
    const response = await fetch('../../data.json');
    const data = await response.json();
    return data;
  }
  catch (error) {
    return console.error(error);
  }
}