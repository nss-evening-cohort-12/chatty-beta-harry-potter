import utils from '../../helpers/utils';

const printResults = (array) => {
  let domString = '';
  array.forEach((gif) => {
    domString += `
      <div class="card">
        <label for="${gif.id}">
          <img src="https://media1.giphy.com/media/${gif.id}/200w.gif">
        </label>
        <input type="radio" id="${gif.id}" name="selectedGif" value="${gif.id}">
      </div>
        `;
  });
  utils.printToDom('gifs', domString);
};

const search = (e) => {
  e.preventDefault();
  const searchPhrase = (e.target.gifPhrase.value);
  const giphyKey = 'KVzh8IEq8Ng94DwoKK5wjB5OcNZFFHND';
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchPhrase}=&limit=5&offset=0&rating=G&lang=en`)
    .then((response) => response.json())
    .then((result) => printResults(result.data));
};

const formListener = () => {
  document.querySelector('#search-giphy').addEventListener('submit', search);
};

export default { formListener };
