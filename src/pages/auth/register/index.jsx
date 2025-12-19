import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/authServices";
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

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [authError, setAuthError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmit = async (data) => {
        setAuthError("");
        setSuccessMsg("");

        try {
            await registerUser(data.email.trim(), data.password);
            setSuccessMsg("Registration successful! Redirecting to login...");
            setTimeout(() => {
                navigate("/auth/login");
            }, 2000);
        } catch (error) {
            setAuthError("Registration failed. Please try again.");
        }
    };

    return (
        <Container>
            <VideoBg autoPlay loop muted playsInline>
                <source src={bgVideo} type="video/mp4" />
            </VideoBg>
            <Overlay />

            <Card>
                <Title>Create Account</Title>
                <Subtitle>Register for Course Allocation System</Subtitle>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" }
                        })}
                    />
                    {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

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

                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}
                    />
                    {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>}

                    {authError && <ErrorMsg>{authError}</ErrorMsg>}
                    {successMsg && <ErrorMsg style={{ color: "#aaffaa" }}>{successMsg}</ErrorMsg>}

                    <Button type="submit">Register</Button>
                </form>

                <FooterText>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/auth/login")}>Login</span>
                </FooterText>
            </Card>
        </Container>
    );
};

export default Register;
