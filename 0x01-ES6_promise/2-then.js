export default function handleResponseFromAPI(promise) {
    promise.then((response) => {
        console.log('Got a response from the API');
    }).catch((error) => {
        console.log(error);
    });
}
