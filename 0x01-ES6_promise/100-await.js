import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([await uploadPhoto(),
    await createUser()]).then((values) => Promise.resolve({
    photo: values[0],
    user: values[1],
  }));
}
