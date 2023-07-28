import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(filename)]).then((values) => Promise.resolve([
    { status: values.status, value: values.value },
  ]));
}
