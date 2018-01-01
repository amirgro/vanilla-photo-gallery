/*
* A service component for integration with the flickr API.
*/

const photoService = {

  fetchPhotos: async ({ author }) => {
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&${ author ? `id=${ author }` : `` }`;                
    const result = await fetchJSONP(url);
    const { items } = await result.json();
    console.log(items);
    return items.map(({ link, author, author_id, date_taken, title, media }) => {
      return {
        link, author, author_id, date: new Date(date_taken).toISOString().slice(0,10), title, thumbnail: media.m
      }
    });
  }
}