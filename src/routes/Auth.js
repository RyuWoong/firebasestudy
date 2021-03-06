import { authService, firebaseInstance } from "fBase";
import React from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <button onClick={onSocialClick} name='google'>
        Continue with Goolge
      </button>
      <button onClick={onSocialClick} name='github'>
        Continue with Github
      </button>
    </div>
  );
};
export default Auth;
