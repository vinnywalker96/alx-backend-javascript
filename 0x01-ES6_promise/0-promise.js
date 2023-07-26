export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const isSuccess = true;
    if (isSuccess) {
      resolve();
    } else {
      reject();
    }
  });
}
