const PhotoItem = {
  create: ({photoData, onAuthorSelect}) => {
    const { link, author, author_id, date_taken, title, media } = photoData;
    return `<div class="photo">
              <a target="_blank" href="${ link }">
                <img src="${ media.m }" alt="${ title }" width="600" height="400">
              </a>
              <div class="desc">${ title }</div>
              <div class="desc-date">${ new Date(date_taken).toISOString().slice(0,10) }</div>
              <div onclick="onAuthorSelect()" class="author-link">${ author }</div>
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