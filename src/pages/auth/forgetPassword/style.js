import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: blur(4px) brightness(0.7);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Card = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 420px;
  padding: 40px 35px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-size: 26px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
  font-size: 15px;
`;

export const Input = styled.input`
  width: 95%;
  padding: 12px ;
  margin-bottom: 14px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  outline: none;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid var(--color-primary);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: var(--color-primary);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--color-primary);
  }
`;

export const FooterText = styled.p`
  margin-top: 18px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);

  span {
    color: var(--color-primary);
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

  span:hover {
    color: #ffffff;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 13px;
  color: #ffaaaa;
  text-align: left;
  margin-bottom: 10px;
  margin-top: -8px;
`;
