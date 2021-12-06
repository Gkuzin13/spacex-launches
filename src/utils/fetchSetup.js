function client(endpoint, customConfig) {
  const baseUrl = 'https://api.spacexdata.com/v4';

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...customConfig,
  };

  return window
    .fetch(`${baseUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}

export default client;
