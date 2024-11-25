import styled from "styled-components";
import backgroundImage from "../../assets/shop-background.jpg";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
`;

export const HeroContent = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const HeroButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;
