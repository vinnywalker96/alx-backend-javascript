import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUse() {
  return Promise.allSettled([await uploadPhoto(),
    await createUser()]).then((values) => Promise.resolve({
    photo: values[0],
    user: values[1],
  }));
}
