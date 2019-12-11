async function fetchFn(url, options = {}, log = false) {
  let data = null;
  let response = await fetch(url, options);

  if (response.status !== 200) {
    console.log(`Error. Response status: ${response.status}`);

    // if 429, too many requets, response
    if (response.status === 429) {
      try {
        const delay = 1000 * response.headers.get('retry-after');
        console.log(`Retrying after ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchFn(url, options, log);
      } catch (error) {
        console.error(error);
      }
    }
  } else {
    data = await response.json();
    if (log) {
      console.log('data', data);
    }
  }
  return data;
}

export { fetchFn };
