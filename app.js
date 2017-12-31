(() => {
  const loadGallery = async (author) => {
    const photosData = await photoService.fetchPhotos({author});
    const galleryEl = Gallery.create({photosData,onAuthorSelect});
    document.getElementById('app-container').innerHTML = galleryEl;
  };

  const onAuthorSelect = (id) => {
    console.log(`selected - ${id}`);
    loadGallery(id);
  };

  loadGallery();
})(photoService)