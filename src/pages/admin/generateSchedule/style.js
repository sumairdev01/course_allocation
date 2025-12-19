import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: var(--color-bg);
  min-height: 100vh;
  color: var(--color-text-primary);
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const HeaderTitle = styled.h2`
  font-family: var(--font-primary);
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 700;
`;

export const GenerateButton = styled.button`
   background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
    
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TableContainer = styled.div`
  margin-top: 2rem;
  overflow-x: auto;
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-secondary);
`;

export const TableHeader = styled.th`
  background: var(--color-primary);
  color: #fff;
  padding: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: left;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(107, 33, 168, 0.05);
  }
`;

export const TableData = styled.td`
  padding: 1rem;
  font-size: 0.95rem;
  color: var(--color-text-primary);
  vertical-align: top;
`;

export const CourseBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 0.8rem;
  min-width: 180px;
  box-shadow: 0 3px 8px rgba(107, 33, 168, 0.08);
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 14px rgba(107, 33, 168, 0.15);
  }

  h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    margin: 0.2rem 0;
  }
`;

export const ActionContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const DownloadButton = styled(GenerateButton)`
  background: var(--color-secondary);

  &:hover {
    background: var(--color-primary-light);
  }
`;
