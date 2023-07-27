export default function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error());
    }
  }).then(() => {
    console.log('Got a response from the API');
  });
}
