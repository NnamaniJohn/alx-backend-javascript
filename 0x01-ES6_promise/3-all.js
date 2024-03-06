import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const user = await createUser();
    const res = await uploadPhoto();
    console.log(res.body, user.firstName, user.lastName);
  } catch (e) {
    console.log('Signup system offline');
  }
}
