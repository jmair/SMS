export default (path, options) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return new Promise((resolve, reject)=> {
    fetch(`${path}`,
      { ...options, headers }
    ).then( (response)=> {
      if (!response.ok) {
        throw Error(`${path} responded ${response.status}`);
      } else {
        resolve(response);
      }
    }).catch(error => {
      reject(error);
    });
  });
};