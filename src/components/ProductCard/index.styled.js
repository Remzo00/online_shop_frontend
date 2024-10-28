import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
