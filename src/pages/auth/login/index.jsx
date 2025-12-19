import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/authServices";
import {
  Container,
  VideoBg,
  Overlay,
  Card,
  Title,
  Subtitle,
  Input,
  Button,
  FooterText,
  ErrorMsg
} from "./style";
import bgVideo from "../../../assets/videos/144257-784302968.mp4";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authError, setAuthError] = useState("");

  const onSubmit = async (data) => {
    setAuthError("");
    try {
      await loginUser(data.email.trim(), data.password);
      navigate("/admin/dashboard");
    } catch (error) {
      setAuthError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container>
      <VideoBg autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </VideoBg>
      <Overlay />

      <Card>
        <Title>Welcome Back</Title>
        <Subtitle>Login to Course Allocation System</Subtitle>

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

          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" }
            })}
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          {authError && <ErrorMsg>{authError}</ErrorMsg>}

          <Button type="submit">Login</Button>
        </form>

        <FooterText>
          Forgot Password?{" "}
          <span onClick={() => navigate("/auth/forgetPassword")}>Reset</span>
        </FooterText>

        <FooterText>
          Don't have an account?{" "}
          <span onClick={() => navigate("/auth/register")}>Register</span>
        </FooterText>
      </Card>
    </Container>
  );
};

export default Login;
