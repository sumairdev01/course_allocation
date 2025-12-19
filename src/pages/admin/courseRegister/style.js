import styled from "styled-components";

/* ====== Layout ====== */
export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-bg) 0%, #ffffff 100%);
  padding: 40px 60px;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
`;

/* ====== Header ====== */
export const HeaderBar = styled.div`
  height: 90px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 4px 20px rgba(107, 33, 168, 0.1);
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: var(--color-primary);
  font-weight: 700;
  letter-spacing: 0.5px;
`;

/* ====== Add Button ====== */
export const AddButton = styled.button`
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 25px 0;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
  }
`;

/* ====== Table ====== */
export const TableContainer = styled.div`
  overflow-x: auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(107, 33, 168, 0.08);
  border: 1px solid var(--color-border);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: rgba(240, 240, 255, 0.5);
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  color: white;
  background-color: var(--color-primary);
  font-size: 15px;
  border-bottom: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 14px 16px;
  color: var(--color-text-secondary);
  font-size: 15px;
  border-bottom: 1px solid #eee;

  .edit-btn, .delete-btn {
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    margin-right: 8px;
  }

  .edit-btn {
    color: var(--color-primary);
  }

  .delete-btn {
    color: #ef4444;
  }

 .edit-btn:hover {
    color: var(--color-secondary);
    background-color: var(--color-primary);
  }
  
  .delete-btn:hover {
    color: #dc2626;
    background-color: #ef4444;

  }
`;

/* ====== Modal ====== */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 16px;
  width: 400px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 6px 25px rgba(107, 33, 168, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-secondary);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary);
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
