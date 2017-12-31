const PhotoItem = {
  create: ({photoData, onAuthorSelect}) => {
    const { link, author, author_id, date, title, thumbnail } = photoData;
    return `<div class="photo">
              <a target="_blank" href="${ link }">
                <img src="${ thumbnail }" alt="${ title }">
              </a>
              <div class="desc">${ title }</div>
              <div class="desc-date">${ date }</div>
              <div id="${ author_id }" class="author-link">${ author }</div>
            </div>
          `;
  }
}

const Gallery = {
  create: ({photosData, onAuthorSelect}) => {
    return `<section class="gallery">
            ${ photosData.map(photoData => PhotoItem.create({photoData, onAuthorSelect})).join('') }
            </section>`;
  }
}