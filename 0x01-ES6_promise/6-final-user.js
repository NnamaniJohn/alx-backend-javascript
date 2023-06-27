import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]).then((values) => [
    {
      status: values[0].status,
      value: values[0].body,
    },
    {
      status: values[1].status,
      value: values[1].body,
    },
  ]);
}
