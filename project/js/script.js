import { movies } from "./db.js";

let ul = document.querySelector(".promo__interactive-list");
let bac = document.querySelector(".promo__bg");
let gen = document.querySelector(".promo__genre");
let title = document.querySelector(".promo__title");
let text = document.querySelector(".promo__descr");
let IMBd = document.querySelector(".IMBd");
let kinopoisk = document.querySelector(".kinopoisk");
let search = document.querySelector("#search");
let genresUL = document.querySelector(".promo__menu-list ul");
let modal = document.querySelector(".modal");
let close_btns = document.querySelector(".btn_1");
let h1 = document.querySelector('.h1')
let h2 = document.querySelector('.h2')
let h3 = document.querySelector('.h3')
let h4 = document.querySelector('.h4')
let h5 = document.querySelector('.h5')
let h6 = document.querySelector('.h6')
let h7 = document.querySelector('.h7')
let h8 = document.querySelector('.h8')
let h9 = document.querySelector('.h9')
let h10 = document.querySelector('.h10')
let h11 = document.querySelector('.h11')

let genres = movies.map((item) => item.Genre);
genres = ["All", ...new Set(genres)];

search.oninput = () => {
  let query = search.value.toLowerCase().trim();
  let filtered = movies.filter((item) => {
    let title = item.Title.toLowerCase();
    if (title.includes(query)) {
      return item;
    }
  });
  reload(filtered);
};

let janior = [];

let filterfordel = [...movies];
reload(
  filterfordel
);

function reload(data) {
  ul.innerHTML = "";

  for (let item of data) {
    let li = document.createElement("li");
    let deletee = document.createElement("div");
    let form = document.forms.form1;
    let edit = document.createElement("edit");

    li.classList.add("promo__interactive-item");
    deletee.classList.add("delete");
    edit.classList.add("edit");

    li.innerHTML = item.Title;

    li.append(deletee, edit);
    ul.append(li);

    deletee.onclick = () => {
      data = data.filter((farrux) => farrux.ID !== item.ID);
    };

    li.onclick = () => {
      bac.style.backgroundImage = `url("${item.Poster}")`;
      gen.innerHTML = item.Genre;
      title.innerHTML = item.Title;
      text.innerHTML = item.Plot;
      IMBd.innerHTML = `IMDb: ${item.imdbRating}`;
      kinopoisk.innerHTML = `Кинопоиск: ${item.Metascore}`;
      h1.innerHTML = `Titel: ${item.Title}`
      h2.innerHTML =  `Year: ${item.Year}`
      h3.innerHTML =  `Runtime: ${item.Runtime}`
      h4.innerHTML =  `Genre: ${item.Genre}`
      h5.innerHTML =  `Director: ${item.Director}`
      h6.innerHTML =  `Writer: ${item.Writer}`
      h7.innerHTML =  `Actors: ${item.Actors}`
      h8.innerHTML =  `Plot: ${item.Plot}`
      h9.innerHTML =  `Language: ${item.Language}`
      h10.innerHTML =  `Country: ${item.Country}`
      h11.innerHTML =  `Awards: ${item.Awards}`
    };
    function modalToggler(arr, callBack) {
      arr.forEach((btn) => {
        btn.onclick = () => {
          callBack();
        };
      });
    }

    function openModal() {
      modal.classList.add("fade", "show");
      modal.classList.remove("hide");
    }
    function closeModal() {
      modal.classList.remove("fade", "show");
    }
    modalToggler([edit], openModal);
    modalToggler([close_btns], closeModal);
  }
}
let genIDX = 0;
reloadGenres(genres);
function reloadGenres(arr) {
  genresUL.innerHTML = "";

  for (let item of arr) {
    let li2 = document.createElement("li");
    let a = document.createElement("a");

    if (arr.indexOf(item) === genIDX) {
      a.classList.add("promo__menu-item_active");
    }

    a.classList.add("promo__menu-item");
    a.href = "#";
    a.innerHTML = item;

    li2.append(a);
    genresUL.append(li2);

    a.onclick = () => {
      genIDX = arr.indexOf(item);
      reloadGenres(genres);

      let filtered = movies.filter((el) => {
        let genre = el.Genre.toLowerCase();
        if (genre.toLowerCase() === genre) {
          return el;
        }
      });

      reload(filtered);
    };
  }
}
