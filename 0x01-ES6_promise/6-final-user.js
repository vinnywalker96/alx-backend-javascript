import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(filename);
    return Promise.resolve({
      status: 'fulfilled',
      value: {
        ...user,
        ...photo,
      },
    });
  } catch (error) {
    return Promise.resolve({
      status: 'rejected',
      value: error.toString(),
    });
  }
}
