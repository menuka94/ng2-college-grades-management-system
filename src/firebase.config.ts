import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyD8iO7bhoDcqJP5AaeT8jKAOAeecNi-5f4",
  authDomain: "names-d8849.firebaseapp.com",
  databaseURL: "https://names-d8849.firebaseio.com",
  projectId: "names-d8849",
  storageBucket: "names-d8849.appspot.com",
  messagingSenderId: "760254963349"
};

export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
