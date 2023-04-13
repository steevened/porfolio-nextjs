import firebase_app, { auth } from '../config';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

// export const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
