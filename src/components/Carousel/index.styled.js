import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${props.active * 100}%`});
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  transition: opacity 0.5s ease;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1;

  &:first-of-type {
    left: 10px;
  }
  &:last-of-type {
    right: 10px;
  }
`;
