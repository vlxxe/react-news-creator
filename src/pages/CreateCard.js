import React from "react";
import { useSelector } from "react-redux";
import { CreateCardForm } from "../components/CreateCardForm/CreateCardForm";

export const CreateCard = () => {
  const isLoggedIn = useSelector(state => state.googleAuth.isLoggedIn);
  const profile = useSelector(state => state.googleAuth.userProfile);

  if (isLoggedIn) {
    return <h2>Необходимо авторизоваться, чтобы создать запись!</h2>;
  }

  return <CreateCardForm profile={profile} />;
};
