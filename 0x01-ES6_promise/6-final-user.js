import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = signUpUser(firstName, lastName);
    const file = uploadPhoto(fileName);

    const [userRes, fileRes] = await Promise.allSettled([user, file]);

    return [
      { status: userRes.status, value: userRes.status === 'fulfilled' ? userRes.value : userRes.reason },
      { status: fileRes.status, value: fileRes.status === 'fulfilled' ? fileRes.value : fileRes.reason },
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}
