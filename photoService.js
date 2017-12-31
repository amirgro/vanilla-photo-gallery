const photoService = {

  fetchPhotos: async ({ author }) => {
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&${ author ? `id=${ author }` : `` }`;                
    const result = await fetchJSONP(url);
    const { items } = await result.json();
    console.log(items);
    return items;
  }
}