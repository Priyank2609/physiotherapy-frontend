import styled from "styled-components";
import { motion } from "framer-motion";

export const EditServiceContainer = styled(motion.div)`
  max-width: 760px;
  margin: 40px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 25px 45px rgba(6, 78, 59, 0.12);
`;

export const Title = styled.h2`
  color: #064e3b;
  margin-bottom: 22px;
  font-size: 1.6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #064e3b;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #064e3b;
  }
`;

export const FileGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.8rem;
    color: #64748b;
  }

  input {
    font-size: 0.85rem;
  }
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
`;

export const SaveButton = styled.button`
  margin-top: 12px;
  padding: 12px;
  background: #064e3b;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #065f46;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
