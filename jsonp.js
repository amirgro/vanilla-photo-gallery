// based on https://gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968

const fetchJSONP = (unique => url =>
  new Promise(rs => {
    const script = document.createElement('script');
    const name = `_jsonp_${unique++}`;

    if (url.match(/\?/)) {
      url += `&jsoncallback=${name}`;
    } else {
      url += `?jsoncallback=${name}`;
    }

    script.src = url;
    window[name] = json => {
      rs(new Response(JSON.stringify(json)));
      script.remove();
      delete window[name];
    };

    document.body.appendChild(script);
  })
)(0);