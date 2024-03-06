import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const file = uploadPhoto(fileName);

  const [userRes, fileRes] = await Promise.allSettled([user, file]);

  return [
    { status: userRes.status, value: userRes.value },
    { status: fileRes.status, value: fileRes.value },
  ];
}
