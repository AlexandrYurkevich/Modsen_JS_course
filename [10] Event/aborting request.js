async function fetchDataWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 1000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    clearTimeout(timeoutId);
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    } else {
      throw error;
    }
  }
}

const apiUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static';

fetchDataWithTimeout(apiUrl)
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));

//Error: Error: Request timed out