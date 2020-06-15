import utils from '../../helpers/utils';
import './searchGiphy.scss';

const printResults = (array) => {
  let domString = '';
  array.forEach((gif) => {
    domString += `
      <div class="gif-choices">
        <input type="radio" id="${gif.id}" class="giphy-radios" name="selectedGif" value="${gif.images.fixed_height.mp4}">
        <label for="${gif.id}">
          <video autoplay loop muted playsinline >
            <source src="${gif.images.fixed_height.mp4}" type="video/mp4" >
          </video>
        </label>
      </div>
        `;
  });
  utils.printToDom('gifs', domString);
};

const search = (e) => {
  e.preventDefault();
  const searchPhrase = (e.target.gifPhrase.value);
  const giphyKey = 'KVzh8IEq8Ng94DwoKK5wjB5OcNZFFHND';
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchPhrase}=&limit=6&offset=0&rating=G&lang=en`)
    .then((response) => response.json())
    .then((result) => printResults(result.data));
};

const formListener = () => {
  document.querySelector('#search-giphy').addEventListener('submit', search);
};

export default { formListener, printResults };
