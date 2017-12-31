(() => {
  const loadGallery = async (author) => {
    const photosData = await photoService.fetchPhotos({author});
    const galleryHTML = Gallery.create({photosData,onAuthorSelect});
    const containerEl = document.getElementById('app-container');
    containerEl.innerHTML = galleryHTML;
    containerEl.addEventListener('click',onAuthorSelect);
  };

  const onAuthorSelect = (e) => {
    if (e.target && e.target.classList.contains('author-link')) {
        e.stopPropagation();
        const authorId = e.target.id;
        loadGallery(authorId);
    }
  };

  loadGallery();
})(photoService)