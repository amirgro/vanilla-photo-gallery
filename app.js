(() => {
  const loadGallery = async () => {
    const author =  window.location.hash.substr(1);
    const photosData = await photoService.fetchPhotos({author});
    const galleryHTML = gallery.create({photosData,onAuthorSelect});
    const containerEl = document.getElementById('app-container');
    containerEl.innerHTML = galleryHTML;
    containerEl.addEventListener('click',onAuthorSelect);
  };

  const onAuthorSelect = (e) => {
    if (e.target && e.target.classList.contains('author-link')) {
        e.stopPropagation();
        const authorId = e.target.id;
        window.location.hash = `${ authorId }`;
    }
  };

  loadGallery();
  window.onhashchange = loadGallery; 

})(photoService, gallery)