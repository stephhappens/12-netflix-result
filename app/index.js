import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result';

const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar__input');
const searchResult = document.querySelector('.results-list');
const searchBtn = document.querySelector('.search-bar__btn');

const searchView = new NetflixResultView(searchResult, {});

function startSearch(term) {
  fetch(`http://netflixroulette.net/api/api.php?title=${term}`)
    .then((searchResult) => searchResult.json())
    .then((data) => searchResult.json())
    .then((data) => {
      const movie = data;
      searchView.model = movie;
      searchView.render();
    });
}

searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  startSearch(searchInput.value);
});
startSearch('Attack on Titan');
