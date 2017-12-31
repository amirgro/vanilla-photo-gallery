(() => {
  const loadGallery = (author) => {
    const data = photoService.fetchPhotos({author});
    const renderGallery = (el) => document.getElementById('app-container').innerHTML = el;
    //const galleryEl = Gallery.create(data,onAuthorSelect);
    const galleryEl =  `<div class="gallery">
        <a target="_blank" href="img_forest.jpg">
          <img src="img_forest.jpg" alt="Forest" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>
    `
    renderGallery(galleryEl);
  };

  const onAuthorSelect = (id) => {
    console.log(`selected - ${id}`);
    loadGallery(id);
  };

  loadGallery();
})(photoService)