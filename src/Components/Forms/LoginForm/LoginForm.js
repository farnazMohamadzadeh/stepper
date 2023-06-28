import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";
import user from "../../../data";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
const LoginForm = () => {
  const authContext=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formSubmit = (data) => {
    if (data.username === user.username && data.password === user.password) {
      authContext.Login(user.token)
      reset()
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit(formSubmit)}>
      {(errors.username || errors.password) && (
        <div className="error-container">
          <p>{errors.username && errors.username.message}</p>
          <p>{errors.password && errors.password.message}</p>
        </div>
      )}
      <input
        type="text"
        placeholder="نام کاربری"
        autoComplete="off"
        {...register("username", {
          required: "وارد کردن نام کاربری اجباری است.",
          minLength: {
            value: 4,
            message: "نام کاربری حداقل 4 کاراکتر باید داشته باشد.",
          },
          maxLength: {
            value: 10,
            message: "نام کاربری حداکثر 10 کاراکتر باید داشته باشد.",
          },
        })}
      />
      <input
        type="password"
        placeholder="رمز عبور"
        autoComplete="off"
        {...register("password", {
          required: "وارد کردن رمز عبور اجباری است.",
          minLength: {
            value: 4,
            message: "رمز عبور حداقل 4 کاراکتر باید داشته باشد.",
          },
          maxLength: {
            value: 10,
            message: "رمز عبور حداکثر 10 کاراکتر باید داشته باشد.",
          },
        })}
      />
      <input type="submit" value="ورود" />
    </form>
  );
};

export default LoginForm;
