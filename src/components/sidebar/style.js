import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  background: rgba(255, 255, 255, 0.12);
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: background 0.3s ease, width 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
    padding: 20px 10px;
  }
`;

export const SidebarHeader = styled.h2`
  font-family: var(--font-primary);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary-light);
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0 0 8px rgba(167, 139, 250, 0.4);
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const MenuItem = styled.div`
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 500;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--color-text-primary);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  background: transparent;

  svg {
    font-size: 18px;
    color: var(--color-primary-light);
    transition: color 0.3s ease, transform 0.2s ease;
  }

  &:hover {
    background: rgba(107, 33, 168, 0.4);
    color: #fff;
    box-shadow: 0 6px 15px rgba(107, 33, 168, 0.4);
    transform: translateX(4px);

    svg {
      color: #fff;
      transform: scale(1.1);
    }
  }
`;
