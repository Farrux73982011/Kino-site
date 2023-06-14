import { movies } from "./db.js";

let ul  = document.querySelector('.promo__interactive-list') 
let bac = document.querySelector('.promo__bg')
let gen = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let text = document.querySelector('.promo__descr')
let IMBd = document.querySelector('.IMBd')
let kinopoisk = document.querySelector('.kinopoisk')

let filterfordel = [...movies]
reload(filterfordel.sort((atitel,btitel) => atitel.Title > btitel.Title ? 1 : -1))

function reload(data) {
   ul.innerHTML=""

for (let item of movies) {
   let li  = document.createElement('li') 
   let deletee = document.createElement('div')

   li.classList.add('promo__interactive-item')
   deletee.classList.add('delete')

   li.innerHTML = item.Title

   li.append(deletee)
   ul.append(li)

   deletee.onclick = () => {
      let filterfordel = filter(farrux => farrux.ID !== item.ID)      
   }

   li.onclick = () => {
      bac.style.backgroundImage = `url("${item.Poster}")`
      gen.innerHTML = item.Genre
      title.innerHTML = item.Title
      text.innerHTML = item.Plot
      IMBd.innerHTML = `IMDb: ${item.imdbRating}`
      kinopoisk.innerHTML = `Кинопоиск: ${item.Metascore}`
   }   
}
}