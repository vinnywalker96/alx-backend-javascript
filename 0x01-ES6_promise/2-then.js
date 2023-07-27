export default function handleResponseFromAPI(promise) {
  const success = {
    status: 200,
    body: 'success',
  };
  const successHandler = () => {
    console.log('Got a response from the API');
    return Promise.resolve(success);
  };
  const errorHandler = () => Promise.reject(new Error());
  promise.then(successHandler).catch(errorHandler);
}
