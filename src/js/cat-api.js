import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_SvEKjafWJw5ap1Er2FAL9LB8W1zMm3EPFPrZp48RikiK9tqJV9WjNf8zmkC89NEm";
const BASE_URL = 'https://api.thecatapi.com/v1';
const api_key = 'live_SvEKjafWJw5ap1Er2FAL9LB8W1zMm3EPFPrZp48RikiK9tqJV9WjNf8zmkC89NEm';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        
    })
};

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
    .then(response => {
        if(!response.ok)
        {throw new Error(response.status)}
        return response.json();
});
}

