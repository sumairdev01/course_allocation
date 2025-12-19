
import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  min-height: 100vh;
`;

export const GreetingSection = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
  gap: 1.5rem;

  h2 {
    font-family: var(--font-primary);
    color: var(--color-primary);
    margin: 0;
  }

  p {
    color: var(--color-text-secondary);
    margin-top: 4px;
  }
`;

export const TimeBox = styled.div`
  text-align: right;

  h3 {
    font-size: 1.8rem;
    margin: 0;
    color: var(--color-text-primary);
  }

  p {
    color: var(--color-text-secondary);
    margin: 0;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export const StatCard = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const StatTitle = styled.span`
  font-size: 1rem;
  color: var(--color-text-secondary);
`;

export const StatValue = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
`;
