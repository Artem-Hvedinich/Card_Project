import styled from "styled-components";

export const Button = styled.button<{ width?: number, height?: number, bgColor?: string, color?: string }>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  border-radius: 30px;
  border: none;
  cursor: pointer
`;

export const Input = styled.input`
  width: 347px;
  height: 30px;
  background: none;
  color: #2D2E46;
  border-width: 0;
  border-color: rgba(36, 37, 74, 0.5);
  border-style: solid;
  border-bottom-width: 1px;
  outline: none
`;