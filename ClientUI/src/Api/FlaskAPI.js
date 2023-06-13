import axios from 'axios';
export const getFlower = async (key) => {
  try {
    const response = await axios.get(`/api/Flower/${key}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shop item:', error);
    return null;
  }
};

export const getHomeFlowers = async () => {
  try {
    const response = await axios.get('/api/home_items');
    return response.data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    return [];
  }
};

export const getFLowersByCategory = async (category) => {
  try {
    const response = await axios.get(`/api/items_by_category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items by category:', error);
    return [];
  }
};