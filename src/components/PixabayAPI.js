import axios from 'axios';

const apiKey = '38287745-8ae9b1f5cab082762fa8c0628';

const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export { fetchImages };
