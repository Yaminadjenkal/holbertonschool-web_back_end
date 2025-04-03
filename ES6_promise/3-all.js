import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results; // Récupération des résultats des promesses
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`); // Affichage
    })
    .catch(() => {
      console.log('Signup system offline'); // Message en cas d'erreur
    });
}

