"use client";
import { fetchApi } from "@/utils/fetch";
import { useState, ChangeEvent, FormEventHandler, FC } from "react";
import { AxiosResponse } from "axios";
import InputText from "../(component)/input/inputText";
import InputPassword from "../(component)/input/inputPassword";
import SubmitButton from "../(component)/button/submit";

interface ILoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const response: AxiosResponse<ILoginResponse> = await fetchApi.post(
        "/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response.data.data.refreshToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label="username"
        value={username}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
      />
      <InputPassword
        label="password"
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <SubmitButton name="Submit" />
    </form>
  );
};

export default LoginForm;
