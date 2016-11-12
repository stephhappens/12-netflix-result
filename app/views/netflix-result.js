export default class NetflixResultView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.querySelector('.movie--title').innerText = this.model.show_title;
    this.el.querySelector('.movie--genre').innerText = this.model.category;
    this.el.querySelector('.movie--rating').innerText = this.model.rating;
    this.el.querySelector('.result-frame__pic').src = this.model.poster;
    this.el.querySelector('.movie--summary').innerText = this.model.summary;
    this.el.querySelector('.movie--actors').innerText = this.model.show_cast;
  }
}
