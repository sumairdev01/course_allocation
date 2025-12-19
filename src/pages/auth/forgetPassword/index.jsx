import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Card, Title, Subtitle, Input, Button, ErrorMsg, VideoBg } from "./style";
import { forgetPassword } from "../../../services/authServices";
import { Overlay } from "../login/style";
import BgVideo from '../../../assets/videos/144257-784302968.mp4'

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [authError, setAuthError] = useState("");

  const onSubmit = async (data) => {
    setMessage("");
    setAuthError("");
    try {
      await forgetPassword(data.email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      setAuthError("Invalid email or user does not exist");
    }
  };

  return (
    <Container>
      <VideoBg autoPlay loop muted playsInline>
        <source src={BgVideo} type="video/mp4" />
      </VideoBg>
      <Overlay />
      <Card>
        <Title>Reset Password</Title>
        <Subtitle>Enter your email to receive reset link</Subtitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
            })}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          {authError && <ErrorMsg>{authError}</ErrorMsg>}
          {message && <p style={{ color: "green" }}>{message}</p>}

          <Button type="submit">Send Reset Link</Button>
        </form>
      </Card>
    </Container>
  );
};

export default ForgetPassword;
