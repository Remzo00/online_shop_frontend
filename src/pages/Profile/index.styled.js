import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.7rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => (props.danger ? "red" : "#333")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? "#cc0000" : "#555")};
  }
`;
