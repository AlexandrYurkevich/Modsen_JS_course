function loadURLs(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', url);
      xmlHttp.onload = () => {
        resolve(xmlHttp.responseText);
      };
      xmlHttp.onerror = function () {
        reject(new Error(`Failed to load URL: ${url}`));
      };
      xmlHttp.send();
    });
  });

  return Promise.all(promises);
}

const urls = ['https://www.programiz.com/javascript/online-compiler', 'https://www.google.com/'];
loadURLs(urls)
  .then(responses => console.log('Responses:', responses))
  .catch(error => console.error('Error:', error));