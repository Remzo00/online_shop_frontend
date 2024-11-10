/* eslint-disable react/prop-types */
import { StyledInput } from "./index.styled";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
