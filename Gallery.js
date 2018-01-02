/*
* The view components. Generate markup for a photo gallery.
*/

const photoItem = {
  create: ({ link, author, author_id, date, title, thumbnail }) => {
    return `<div class="photo">
              <a target="_blank" href="${ link }">
                <img class="thumbnail" src="${ thumbnail }" alt="${ title }">
              </a>
              <div class="desc">
                <div class="title">${ title }</div>
                <div class="desc-date">${ date }</div>
                <div id="${ author_id }" class="author-link">${ author }</div>
              </div>
            </div>
          `;
  }
}

const gallery = {
  create: ({ photosData }) => {
    return `<section class="gallery">
              ${ photosData.map(photoData => photoItem.create(photoData)).join('') }
            </section>`;
  }
}