"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import InputLabel from "../components/atoms/InputLabel/InputLabel";
import TextInput from "../components/atoms/TextInput/TextInput";
import PrimaryButton from "../components/atoms/PrimaryButton/PrimaryButton";
import { access } from "fs";

interface FormData {
  username: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const [data, setData] = useState<FormData>({
    username: "",
    password: "",
  });
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      // const response = await axios.post(
      //   `${process.env.APP_API_URL}auth/login/`,
      //   data
      // );
      const response = {
        data: {
          user: {
            id: "1",
            updateToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            name: "VuND",
            username: "user",
            role: "admin",
          },
          token: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        }
      };
      // Handle successful response
      dispatch(login(response.data))
        router.push("/");
    } catch (error: any) {
      // Handle error response
      if (error) {
        const messages = error.response.data.message;
        if (Array.isArray(messages)) {
          toast.error(messages.join("\n"));
        } else {
          toast.error(error.response.data.message);
        }
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <h2 className="text-center font-bold">
        <span className="text-lg block capitalize text-4xl text-white font-bold">VU-DEV LOGIN</span>
      </h2>
      <div className="mt-4">
        <InputLabel forInput="username" value="Username">
          Username
        </InputLabel>
        <TextInput
          id="username"
          type="text"
          name="username"
          value={data.username}
          className="mt-1 block w-full"
          autoComplete="username"
          handleKeyDown={handleKeyDown}
          handleChange={onHandleChange}
          required={true}
          placeHolder={"Username"}
        />
      </div>

      <div className="mt-4">
        <InputLabel forInput="password" value="Password">
          Password
        </InputLabel>
        <TextInput
          id="password"
          type="password"
          name="password"
          className="mt-1 block w-full"
          autoComplete="current-password"
          handleKeyDown={handleKeyDown}
          handleChange={onHandleChange}
          value={data.password}
          required={true}
          placeHolder={"Password"}
        />
      </div>

      <div className="flex items-center justify-center mt-8 ">
        <PrimaryButton
          type="submit"
          processing={false}
          className=""
          onClick={handleLogin}
        >
          Login
        </PrimaryButton>
      </div>

      <ToastContainer />
    </>
  );
}
