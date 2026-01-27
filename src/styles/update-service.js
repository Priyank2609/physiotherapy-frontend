import styled from "styled-components";
import { motion } from "framer-motion";

/* ---------- PAGE CONTAINER ---------- */
export const EditServiceContainer = styled(motion.div)`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
`;

/* ---------- TITLE ---------- */
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 24px;
`;

/* ---------- FORM ---------- */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h4 {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #334155;
  }

  button {
    align-self: flex-start;
  }
`;

/* ---------- INPUT ---------- */
export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-size: 14px;
  color: #0f172a;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

/* ---------- TEXTAREA ---------- */
export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-size: 14px;
  resize: vertical;
  color: #0f172a;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

/* ---------- FILE INPUT ---------- */
export const FileGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #334155;
  }

  input[type="file"] {
    padding: 10px;
    background: #f8fafc;
    border-radius: 10px;
    border: 1px dashed #cbd5f5;
    cursor: pointer;
  }
`;

/* ---------- SAVE BUTTON ---------- */
export const SaveButton = styled.button`
  margin-top: 30px;
  padding: 14px 22px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;
