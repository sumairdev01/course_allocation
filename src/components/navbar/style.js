import styled from "styled-components";

export const NavbarContainer = styled.div`
  
  height: 70px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 16px rgba(107, 33, 168, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 240px;
  z-index: 100;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavTitle = styled.h2`
  font-size: 20px;
  color: var(--color-primary);
  font-family: var(--font-primary);
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary);
    color: #fff;

    svg {
      color: #fff;
    }
  }
`;

export const ProfileImage = styled.div`
  svg {
    color: var(--color-primary);
    transition: color 0.2s ease;
  }
`;

export const ProfileName = styled.span`
  font-size: 15px;
  font-weight: 600;
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  transition: color 0.2s ease;
`;
